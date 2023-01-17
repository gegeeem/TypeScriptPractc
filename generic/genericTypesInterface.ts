type Base = {
  id: number;
  title: string;
};
type GenericSelectProps<TValue> = {
  values: TValue[];
  selected: (value: TValue) => void;
};
