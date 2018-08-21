import React from "react"

const Eth = props => (
  <svg width={props.size} height={props.size} viewBox="0 0 32 32" {...props}>
    <g fill={"#FFF"} fillRule="evenodd">
      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" />
      <g fillRule="nonzero">
        <path fillOpacity={0.5} d="M16.498 4v8.87l7.497 3.35z" />
        <path opacity={0.8} d="M16.498 4L9 16.22l7.498-3.35z" />
        <path fillOpacity={0.5} d="M16.498 21.968v6.027L24 17.616z" />
        <path opacity={0.796} d="M16.498 27.995v-6.028L9 17.616z" />
        <path fillOpacity={0.5} d="M9 16.22l7.498 4.353v-7.701z" />
      </g>
    </g>
  </svg>
)

export default Eth
