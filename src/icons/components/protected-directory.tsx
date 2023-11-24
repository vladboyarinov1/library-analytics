import { IconProps, IconWrapper } from '../icon-wrapper'

export const ProtectedDirectory = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M19.6999 21.6004H5.2999C4.6374 21.6004 4.07178 21.3325 3.60303 20.7968C3.13428 20.2611 2.8999 19.6147 2.8999 18.8575V7.88611C2.8999 7.51468 3.01553 7.19325 3.24678 6.92182C3.47803 6.65039 3.7624 6.51468 4.0999 6.51468H13.0999C13.0999 6.41468 13.1718 6.21468 13.3155 5.91468C13.4593 5.61468 13.5999 5.3361 13.7374 5.07896L13.9624 4.71468C14.0499 4.44325 14.2249 4.21825 14.4874 4.03968C14.7499 3.8611 15.0249 3.77182 15.3124 3.77182H19.8124C20.1124 3.77182 20.3937 3.8611 20.6562 4.03968C20.9187 4.21825 21.0937 4.44325 21.1812 4.71468C21.7937 5.62896 22.0999 6.22896 22.0999 6.51468V18.8575C22.0999 19.6147 21.8655 20.2611 21.3968 20.7968C20.928 21.3325 20.3624 21.6004 19.6999 21.6004ZM14.8999 12.0004C14.8999 11.2432 14.6655 10.5968 14.1968 10.0611C13.728 9.52539 13.1624 9.25753 12.4999 9.25753C11.8374 9.25753 11.2718 9.52539 10.803 10.0611C10.3343 10.5968 10.0999 11.2432 10.0999 12.0004C10.0999 12.5575 10.2405 13.0682 10.5218 13.5325C10.803 13.9968 11.1687 14.329 11.6187 14.529L10.0999 18.8575H14.8999L13.3812 14.529C13.8312 14.329 14.1968 13.9968 14.478 13.5325C14.7593 13.0682 14.8999 12.5575 14.8999 12.0004ZM3.7624 3.34325C3.8499 3.07182 4.0249 2.84682 4.2874 2.66825C4.5499 2.48968 4.8249 2.40039 5.1124 2.40039H9.6124C9.9124 2.40039 10.1937 2.48968 10.4562 2.66825C10.7187 2.84682 10.8999 3.07182 10.9999 3.34325L11.8999 5.14325H2.8999L3.7624 3.34325Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}