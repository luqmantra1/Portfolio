import { useState, useRef, useEffect, useMemo } from 'react'
import { FaChevronDown, FaSearch, FaTimes, FaCheck } from 'react-icons/fa'
import { countryCodes, defaultCountry } from '../../data/countryCodes'
import './CountryCodeSelect.css'

const CountryCodeSelect = ({
  selectedDialCode = '+60',
  onSelectCountry,
  phoneNumber = '',
  onPhoneNumberChange,
  inputId = 'inquiry-phone',
  inputPlaceholder = 'e.g. 12-345 6789'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const containerRef = useRef(null)
  const searchInputRef = useRef(null)
  const listRef = useRef(null)

  // Find currently selected country
  const selectedCountry = useMemo(() => {
    return countryCodes.find((c) => c.dial_code === selectedDialCode) || defaultCountry
  }, [selectedDialCode])

  // Filter countries based on search
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return countryCodes
    // Allow searching by name, dial_code (with or without '+'), or ISO 2-letter code
    const cleanQ = q.startsWith('+') ? q.slice(1) : q
    return countryCodes.filter((c) => {
      const matchName = c.name.toLowerCase().includes(q)
      const matchCode = c.code.toLowerCase().includes(q)
      const matchDial = c.dial_code.toLowerCase().includes(q) || c.dial_code.replace('+', '').includes(cleanQ)
      return matchName || matchCode || matchDial
    })
  }, [searchQuery])

  // Split popular vs rest when not searching
  const popularList = useMemo(() => {
    if (searchQuery.trim()) return []
    return countryCodes.filter((c) => c.popular)
  }, [searchQuery])

  const regularList = useMemo(() => {
    if (searchQuery.trim()) return filteredCountries
    return countryCodes
  }, [searchQuery, filteredCountries])

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('')
      setFocusedIndex(-1)
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 50)
    }
  }, [isOpen])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = (country) => {
    onSelectCountry(country.dial_code, country)
    setIsOpen(false)
    setSearchQuery('')
    // Focus back on phone input
    const phoneInput = document.getElementById(inputId)
    if (phoneInput) {
      phoneInput.focus()
    }
  }

  // Handle keyboard navigation inside search list
  const handleSearchKeyDown = (e) => {
    const list = searchQuery.trim() ? filteredCountries : regularList
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev < list.length - 1 ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : list.length - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (focusedIndex >= 0 && list[focusedIndex]) {
        handleSelect(list[focusedIndex])
      } else if (list.length > 0) {
        handleSelect(list[0])
      }
    }
  }

  // Auto-scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll('.country-item')
      if (items[focusedIndex]) {
        items[focusedIndex].scrollIntoView({ block: 'nearest' })
      }
    }
  }, [focusedIndex])

  return (
    <div className="country-phone-wrapper" ref={containerRef}>
      <div className={`country-phone-input-group ${isOpen ? 'dropdown-active' : ''}`}>
        {/* Trigger Button */}
        <button
          type="button"
          className="country-select-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          title={`Country Code: ${selectedCountry.name} (${selectedCountry.dial_code}) - Click to change`}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="country-btn-flag" role="img" aria-label={selectedCountry.name}>
            {selectedCountry.flag}
          </span>
          <span className="country-btn-dial">{selectedCountry.dial_code}</span>
          <FaChevronDown className={`country-btn-chevron ${isOpen ? 'open' : ''}`} />
        </button>

        {/* Phone Number Input */}
        <input
          id={inputId}
          type="tel"
          className="country-phone-input"
          placeholder={inputPlaceholder}
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="country-dropdown-popover glass-panel" role="listbox">
          {/* Search Header */}
          <div className="country-search-bar">
            <FaSearch className="country-search-icon" />
            <input
              ref={searchInputRef}
              type="text"
              className="country-search-input"
              placeholder="Search country or code (e.g. Malaysia, +60, 65, US)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setFocusedIndex(0)
              }}
              onKeyDown={handleSearchKeyDown}
            />
            {searchQuery && (
              <button
                type="button"
                className="country-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Results List */}
          <div className="country-list-scroll" ref={listRef}>
            {searchQuery.trim() === '' ? (
              <>
                {/* Popular / Quick Select Section */}
                <div className="country-section-header">Popular / Frequent</div>
                {popularList.map((country) => {
                  const isSelected = country.dial_code === selectedDialCode
                  return (
                    <button
                      key={`pop-${country.code}-${country.dial_code}`}
                      type="button"
                      className={`country-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelect(country)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="country-item-left">
                        <span className="country-item-flag">{country.flag}</span>
                        <span className="country-item-name">{country.name}</span>
                        <span className="country-item-iso">({country.code})</span>
                      </div>
                      <div className="country-item-right">
                        <span className="country-item-dial">{country.dial_code}</span>
                        {isSelected && <FaCheck className="country-item-check" />}
                      </div>
                    </button>
                  )
                })}

                <div className="country-section-header">All Countries ({regularList.length})</div>
                {regularList.map((country, idx) => {
                  const isSelected = country.dial_code === selectedDialCode
                  return (
                    <button
                      key={`all-${country.code}-${country.dial_code}`}
                      type="button"
                      className={`country-item ${isSelected ? 'selected' : ''} ${focusedIndex === idx ? 'focused' : ''}`}
                      onClick={() => handleSelect(country)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="country-item-left">
                        <span className="country-item-flag">{country.flag}</span>
                        <span className="country-item-name">{country.name}</span>
                        <span className="country-item-iso">({country.code})</span>
                      </div>
                      <div className="country-item-right">
                        <span className="country-item-dial">{country.dial_code}</span>
                        {isSelected && <FaCheck className="country-item-check" />}
                      </div>
                    </button>
                  )
                })}
              </>
            ) : filteredCountries.length === 0 ? (
              <div className="country-no-results">
                <p>No countries found matching &ldquo;{searchQuery}&rdquo;</p>
                <span>Try searching by country name, country code, or dial prefix.</span>
              </div>
            ) : (
              filteredCountries.map((country, idx) => {
                const isSelected = country.dial_code === selectedDialCode
                return (
                  <button
                    key={`search-${country.code}-${country.dial_code}`}
                    type="button"
                    className={`country-item ${isSelected ? 'selected' : ''} ${focusedIndex === idx ? 'focused' : ''}`}
                    onClick={() => handleSelect(country)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <div className="country-item-left">
                      <span className="country-item-flag">{country.flag}</span>
                      <span className="country-item-name">{country.name}</span>
                      <span className="country-item-iso">({country.code})</span>
                    </div>
                    <div className="country-item-right">
                      <span className="country-item-dial">{country.dial_code}</span>
                      {isSelected && <FaCheck className="country-item-check" />}
                    </div>
                  </button>
                )
              })
            )}
          </div>

          {/* Quick Footer hint */}
          <div className="country-dropdown-footer">
            <span>240+ countries & territories available</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountryCodeSelect
