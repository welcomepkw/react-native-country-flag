import React from "react";
import * as flag from "./flags/flagsIndex";
import FastImage from 'react-native-fast-image'


interface Props {
  isoCode: string;
  size: number;
  style?: any;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const CountryFlag = ({ isoCode, size, style }: Props) => {
  // This switch case is just there because you can't name variables "in" and "do"
  switch (isoCode.toLowerCase()) {
    case "in":
      return <FastImage
          style={[{ width: size * 1.6, height: size }, style]}
          source={flag["ind"]}
          resizeMode={FastImage.resizeMode.contain}
      />

    case "do":
      return <FastImage
          style={[{ width: size * 1.6, height: size }, style]}
          source={flag["dom"]}
          resizeMode={FastImage.resizeMode.contain}
      />

    case "gb-eng":
    case "gb-nir":
    case "gb-sct":
    case "gb-wls":
      const suffix = capitalizeFirstLetter(isoCode.toLowerCase().split("-")[1]);
      const key = `gb${suffix}`;
      return <FastImage
          style={[{ width: size * 1.6, height: size }, style]}
          source={(flag as any)[key]}
          resizeMode={FastImage.resizeMode.contain}
      />

    default:
      return (
          <FastImage
              style={[{ width: size * 1.6, height: size }, style]}
              source={(flag as any)[isoCode.toLowerCase()]}
              resizeMode={FastImage.resizeMode.contain}
          />
      );
  }
};

export default CountryFlag;
