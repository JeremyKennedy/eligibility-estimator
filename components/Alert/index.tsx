import React, { useEffect, useRef, useState } from 'react'
import { EstimationSummaryState } from '../../utils/api/definitions/enums'
import { useWindowWidth } from '../Hooks'

/** offset padding and margin of the component, used to calculate svg height responsively */
const OFFSET_WIDTH = 28

export const Alert: React.VFC<{
  id?: string
  title: string
  children: React.ReactNode | string
  type: EstimationSummaryState
  insertHTML?: boolean
}> = ({ id, title, children, type, insertHTML }) => {
  const [height, setHeight] = useState<number>(null)
  const windowWidth = useWindowWidth()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.clientHeight
      setHeight(height)
    }
  }, [windowWidth])

  const className = (() => {
    switch (type) {
      case EstimationSummaryState.UNAVAILABLE:
        return 'border-warning text-warning'
      case EstimationSummaryState.AVAILABLE_INELIGIBLE:
        return 'border-danger text-danger'
      case EstimationSummaryState.AVAILABLE_ELIGIBLE:
        return 'border-[#278400] text-[#278400]'
      case EstimationSummaryState.MORE_INFO:
        return 'border-[#269ABC] text-[#269ABC]'
      default:
        break
    }
  })()

  return (
    <div
      className={`py-2.5 pl-2 border-[3px] ${className} rounded`}
      ref={ref}
      id={id}
    >
      <div className="flex flex-row justify-start items-start">
        <div>
          <svg
            width="26"
            height={height - OFFSET_WIDTH}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" width="6" height="15" className="fill-current" />
            <rect
              x="10"
              y="47"
              width="6"
              height={height - OFFSET_WIDTH}
              className="fill-current"
            />
            <path
              d="M25.5938 31C25.5938 37.9569 19.9548 43.5938 13 43.5938C6.04515 43.5938 0.40625 37.9569 0.40625 31C0.40625 24.0472 6.04515 18.4062 13 18.4062C19.9548 18.4062 25.5938 24.0472 25.5938 31ZM13 33.5391C11.7099 33.5391 10.6641 34.5849 10.6641 35.875C10.6641 37.1651 11.7099 38.2109 13 38.2109C14.2901 38.2109 15.3359 37.1651 15.3359 35.875C15.3359 34.5849 14.2901 33.5391 13 33.5391ZM10.7822 25.1426L11.1589 32.0488C11.1765 32.372 11.4438 32.625 11.7674 32.625H14.2326C14.5562 32.625 14.8235 32.372 14.8411 32.0488L15.2178 25.1426C15.2368 24.7935 14.9589 24.5 14.6093 24.5H11.3906C11.0411 24.5 10.7632 24.7935 10.7822 25.1426Z"
              className="fill-current"
            />
          </svg>
        </div>
        <div className="ml-3 flex flex-col pt-2">
          <h5 className="h5 mb-3 text-content">{title}</h5>
          {!insertHTML ? (
            <div className="text-content">{children}</div>
          ) : (
            <div
              className="summary-link text-content"
              dangerouslySetInnerHTML={{ __html: children as string }}
            ></div>
          )}
        </div>
      </div>
    </div>
  )
}
