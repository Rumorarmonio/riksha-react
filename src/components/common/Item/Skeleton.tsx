import React, {ReactElement} from 'react'
import ContentLoader from 'react-content-loader'

export function Skeleton(props: any): ReactElement {
  return (
    <ContentLoader
      speed={2}
      width={392}
      height={501}
      viewBox="0 0 392 501"
      backgroundColor="#E8E8E8"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="16" ry="16" width="392" height="256"/>
      <rect x="0" y="284" rx="6" ry="6" width="392" height="17"/>
      <rect x="125" y="302" rx="0" ry="0" width="1" height="0"/>
      <rect x="0" y="328" rx="6" ry="6" width="392" height="17"/>
      <rect x="153" y="337" rx="0" ry="0" width="2" height="8"/>
      <rect x="0" y="372" rx="6" ry="6" width="392" height="45"/>
      <rect x="270" y="416" rx="0" ry="0" width="3" height="6"/>
      <rect x="0" y="452" rx="6" ry="6" width="115" height="43"/>
      <rect x="210" y="452" rx="6" ry="6" width="180" height="43"/>
    </ContentLoader>
  )
}
