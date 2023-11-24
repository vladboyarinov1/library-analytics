import { IconProps, IconWrapper } from '../icon-wrapper'

export const DocumentText = (allProps: IconProps) => {
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
              'M20.0625 11.4707H13.5C12.9033 11.4707 12.331 11.2337 11.909 10.8117C11.4871 10.3897 11.25 9.81744 11.25 9.2207V2.6582C11.25 2.60848 11.2302 2.56078 11.1951 2.52562C11.1599 2.49046 11.1122 2.4707 11.0625 2.4707H6.75C5.95435 2.4707 5.19129 2.78677 4.62868 3.34938C4.06607 3.91199 3.75 4.67505 3.75 5.4707V20.4707C3.75 21.2664 4.06607 22.0294 4.62868 22.592C5.19129 23.1546 5.95435 23.4707 6.75 23.4707H17.25C18.0456 23.4707 18.8087 23.1546 19.3713 22.592C19.9339 22.0294 20.25 21.2664 20.25 20.4707V11.6582C20.25 11.6085 20.2302 11.5608 20.1951 11.5256C20.1599 11.4905 20.1122 11.4707 20.0625 11.4707ZM15.75 18.9707H8.25C8.05109 18.9707 7.86032 18.8917 7.71967 18.751C7.57902 18.6104 7.5 18.4196 7.5 18.2207C7.5 18.0218 7.57902 17.831 7.71967 17.6904C7.86032 17.5497 8.05109 17.4707 8.25 17.4707H15.75C15.9489 17.4707 16.1397 17.5497 16.2803 17.6904C16.421 17.831 16.5 18.0218 16.5 18.2207C16.5 18.4196 16.421 18.6104 16.2803 18.751C16.1397 18.8917 15.9489 18.9707 15.75 18.9707ZM15.75 15.2207H8.25C8.05109 15.2207 7.86032 15.1417 7.71967 15.001C7.57902 14.8604 7.5 14.6696 7.5 14.4707C7.5 14.2718 7.57902 14.081 7.71967 13.9404C7.86032 13.7997 8.05109 13.7207 8.25 13.7207H15.75C15.9489 13.7207 16.1397 13.7997 16.2803 13.9404C16.421 14.081 16.5 14.2718 16.5 14.4707C16.5 14.6696 16.421 14.8604 16.2803 15.001C16.1397 15.1417 15.9489 15.2207 15.75 15.2207Z'
            }
            fill={'currentColor'}
          />
          <path
            d={
              'M19.6509 9.81133L12.9098 3.07023C12.8967 3.0572 12.8801 3.04833 12.8619 3.04475C12.8438 3.04116 12.825 3.04302 12.8079 3.05008C12.7908 3.05715 12.7762 3.0691 12.7659 3.08445C12.7556 3.09979 12.7501 3.11784 12.75 3.13633V9.22117C12.75 9.42008 12.829 9.61085 12.9697 9.7515C13.1103 9.89215 13.3011 9.97117 13.5 9.97117H19.5848C19.6033 9.97109 19.6214 9.96555 19.6367 9.95524C19.6521 9.94494 19.664 9.93032 19.6711 9.91324C19.6781 9.89616 19.68 9.87737 19.6764 9.85924C19.6728 9.8411 19.664 9.82443 19.6509 9.81133Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}