import { TemperatureBlock } from "../components/weather-blocks/temperature/Temperature";
import { WindSpeedBlock } from "../components/weather-blocks/wind-speed/WindSpeed";
import { HumidityBlock } from "../components/weather-blocks/humidity/Humidity";

const COLOR_OPTIONS = [
  { label: "Red", value: "#F8B4B4" },   
  { label: "Green", value: "#B9FBC0" }, 
  { label: "Blue", value: "#BDE0FE" },  
  { label: "Teal", value: "#B8F2E6" },  
];

const BASE_FIELDS = {
  latitude: { type: "number" },
  longitude: { type: "number" },
  color: {
    type: "select",
    options: COLOR_OPTIONS,
  },
};

const DEFAULT_LOCATION = {
  latitude: 20.694760728457183,
  longitude: -103.38789586873462,
};

const DEFAULT_COLOR = "#B8F2E6";

export const config = {
  components: {
    Temperature: {
      render: ({ latitude, longitude, color }) => (
        <TemperatureBlock
          latitude={latitude}
          longitude={longitude}
          color={color}
        />
      ),

      defaultProps: {
        ...DEFAULT_LOCATION,
        color: DEFAULT_COLOR,
      },

      fields: BASE_FIELDS,
    },

    WindSpeed: {
      render: ({ latitude, longitude, color }) => (
        <WindSpeedBlock
          latitude={latitude}
          longitude={longitude}
          color={color}
        />
      ),

      defaultProps: {
        ...DEFAULT_LOCATION,
       color: DEFAULT_COLOR,
      },

      fields: BASE_FIELDS,
    },

    Humidity: {
      render: ({ latitude, longitude, color }) => (
        <HumidityBlock
          latitude={latitude}
          longitude={longitude}
          color={color}
        />
      ),

      defaultProps: {
        ...DEFAULT_LOCATION,
        color: DEFAULT_COLOR,
      },

      fields: BASE_FIELDS,
    },

    ThreeColumnLayout: {
      fields: {
        leftColumn: { type: "slot" },
        centerColumn: { type: "slot" },
        rightColumn: { type: "slot" },
      },

      render: ({
        leftColumn: LeftColumn,
        centerColumn: CenterColumn,
        rightColumn: RightColumn,
      }) => {
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            <LeftColumn />
            <CenterColumn />
            <RightColumn />
          </div>
        );
      },
    },
  },

  root: {
    render: ({ children }) => {
      return <div>{children}</div>;
    },
  },
};
