import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

const checkValue = (value: number, upperBound: number, lowerBound: number) => {
  return value >= lowerBound && value <= upperBound;
};

interface FilterInputSliderProps {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
}

export default function FilterInputSlider({
  min,
  max,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}: FilterInputSliderProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <Input
          type="number"
          placeholder="Min"
          className="w-[30%]"
          defaultValue={min}
          value={minValue}
          onChange={(e) =>
            checkValue(Number(e.target.value), maxValue, minValue) &&
            setMinValue(Number(e.target.value))
          }
        />
        <div className="text-3xl font-medium">-</div>
        <Input
          type="number"
          placeholder="Max"
          className="w-[30%]"
          defaultValue={max}
          value={maxValue}
          onChange={(e) =>
            checkValue(Number(e.target.value), maxValue, minValue) &&
            setMaxValue(Number(e.target.value))
          }
        />
      </div>
      <div className="mt-4">
        <Slider
          className="mt-1"
          defaultValue={[min, max]}
          value={[minValue, maxValue]}
          onValueChange={(value) => {
            setMinValue(value[0]);
            setMaxValue(value[1]);
          }}
          min={min}
          max={max}
          step={1}
        />
      </div>
    </>
  );
}
