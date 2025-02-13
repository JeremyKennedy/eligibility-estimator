import { observer } from 'mobx-react'
import { InputHTMLAttributes, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { useTranslation } from '../Hooks'
import { Tooltip } from '../Tooltip/tooltip'
import { ErrorLabel } from './validation/ErrorLabel'

export interface CurrencyFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error?: string
}

/**
 * A form input field rendered by the component factory. If the field is a currency field (income / partner receiving OAS) then use a NumberFormat to render the number masked as a currency
 * Currently support text and number fields
 * @param props {CurrencyFieldProps}
 * @returns
 */
export const CurrencyField: React.VFC<CurrencyFieldProps> = observer(
  (props) => {
    const { name, label, required, value, placeholder, onChange, error } = props
    const requiredText = useTranslation<string>('required')

    // only need to run this once at component render, so no need for deps
    useEffect(() => {
      // blur the input element on scroll instead of changing the value! Does not affect Keyboard input.
      document.addEventListener('wheel', function (event) {
        const el = document.activeElement as HTMLInputElement
        if (el?.type === 'number') {
          el.blur()
        }
      })
    }, [])

    return (
      <div>
        <div className="mb-2.5">
          <label
            htmlFor={name}
            aria-label={name}
            data-testid="currency-input-label"
            className="text-content font-bold inline"
          >
            {required && <span className="text-danger">*</span>} {label}
          </label>
          <span>
            {required && (
              <span className="font-bold text-danger ml-1">
                ({requiredText})
              </span>
            )}
            <Tooltip field={name} />
          </span>
        </div>
        {error && <ErrorLabel errorMessage={error} />}
        <NumberFormat
          id={name}
          name={name}
          data-testid="currency-input"
          thousandSeparator={true}
          prefix="$"
          className={`form-control text-content border-[#333] ${
            error ? ' border-danger' : ''
          }`}
          min={0}
          value={value != null ? (value as string) : ''}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          autoComplete="off"
          enterKeyHint="done"
        />
      </div>
    )
  }
)
