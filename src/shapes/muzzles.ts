import { Shape } from './types'
import { darken } from '../utils/colors'

export const muzzles: Shape[] = [
  (_color: string) => `
    <g>
      <path fill="#fff" d="M299.89,307.23c0,34.96-22.34,63.29-49.89,63.29s-49.89-28.34-49.89-63.29s22.34-46.76,49.89-46.76S299.89,272.27,299.89,307.23z"/>
      <path fill="#f3252f" d="M250,315.06l12.26,7.75c0,23.05-24.12,23.17-24.37,0.36c0-0.12,0-0.24,0-0.36L250,315.06z"/>
      <path d="M285.22,315.94c-0.8-0.23-1.63,0.23-1.86,1.03c-0.83,2.89-3.06,4.81-6.63,5.7c-7.18,1.79-17.58-1.2-22.71-6.52c-0.52-0.54-0.96-1.09-1.34-1.64v-7.22c14.96-1.06,26.68-10.9,26.68-22.88c0-12.69-13.15-11.23-29.36-11.23s-29.36-1.46-29.36,11.23c0,12.01,11.77,21.86,26.77,22.88v7.06c-0.4,0.61-0.88,1.21-1.45,1.8c-5.14,5.32-15.54,8.3-22.71,6.52c-3.57-0.89-5.8-2.81-6.63-5.7c-0.23-0.79-1.06-1.26-1.86-1.03c-0.8,0.23-1.26,1.06-1.03,1.86c1.13,3.94,4.17,6.63,8.79,7.78c1.66,0.41,3.45,0.61,5.3,0.61c7.33,0,15.6-3.08,20.3-7.95c0.74-0.76,1.35-1.55,1.87-2.36c0.52,0.81,1.13,1.6,1.87,2.36c4.7,4.87,12.97,7.95,20.3,7.95c1.85,0,3.64-0.2,5.3-0.61c4.62-1.15,7.66-3.84,8.79-7.78C286.47,317,286.01,316.17,285.22,315.94z"/>
    </g>
  `,
  (_color: string) => `
    <g>
      <path fill="#fff" d="M324.74,343.45c0,34.41-33.46,29.75-74.74,29.75s-74.74,4.66-74.74-29.75s33.46-62.3,74.74-62.3S324.74,309.04,324.74,343.45z"/>
      <path d="M274.36,312.31c-0.83,0-1.5,0.67-1.5,1.5c0,5.95-5.54,8.66-10.68,8.66c-4.88,0-10.09-2.44-10.63-7.75v-14.36c13.02-0.09,23.34-1.46,23.34-10.08c0-8.95-11.15-16.21-24.89-16.21s-24.89,7.26-24.89,16.21c0,8.61,10.31,9.98,23.32,10.08v14.45h0.02c-0.59,5.25-5.78,7.66-10.62,7.66c-5.14,0-10.68-2.71-10.68-8.66c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5c0,3.63,1.53,6.68,4.41,8.82c2.47,1.83,5.76,2.83,9.27,2.83c4.87,0,9.78-2.07,12.17-6.06c0.72,1.22,1.69,2.31,2.92,3.22c2.47,1.83,5.76,2.83,9.27,2.83c6.8,0,13.68-4,13.68-11.66C275.86,312.98,275.19,312.31,274.36,312.31z"/>
    </g>
  `,
  (color: string) => `
    <g>
      <path fill="${darken(color, 30)}" d="M304.02,299.19c0,20.31-24.19,59.53-54.02,59.53s-54.02-39.23-54.02-59.53s24.19-36.77,54.02-36.77S304.02,278.89,304.02,299.19z"/>
      <path fill="#fff" d="M237.81,319.4c0,14.3,24.09,14.3,24.09,0c-5.99,1.09-9.82-1.05-12.04-5.62C246.92,318.53,242.95,320.52,237.81,319.4z"/>
      <path d="M274.58,312.22c-8.18,5.29-14.4,7.23-18.46,5.76c-2.36-0.85-4.02-2.86-5.08-6.1c15.64-0.67,28.14-16.14,28.14-27.54c0-11.66-13.07-14.64-29.19-14.64s-29.19,2.3-29.19,13.96c0,11.4,12.51,27.52,28.14,28.22c-1.06,3.24-2.72,5.25-5.08,6.1c-4.06,1.48-10.27-0.46-18.46-5.76c-0.46-0.3-1.08-0.17-1.38,0.3c-0.3,0.46-0.17,1.08,0.3,1.38c6.79,4.39,12.26,6.56,16.59,6.56c1.32,0,2.53-0.2,3.64-0.6c2.35-0.85,4.17-2.62,5.45-5.24c1.28,2.62,3.1,4.39,5.45,5.24c1.11,0.4,2.32,0.6,3.64,0.6c4.32,0,9.79-2.17,16.59-6.56c0.46-0.3,0.6-0.92,0.3-1.38S275.05,311.92,274.58,312.22z"/>
    </g>
  `,
]
