type GetNumber = (num: number) => Promise<number>;

const getNumber: GetNumber = async (num) => {
  const result = await Promise.resolve(num);

  return result;
};

// --------------------------------------------

// ✅ Arrow function with Interface
interface IGetNumber {
  (num: number): Promise<number>;
}

const getNumber2: IGetNumber = async (num) => {
  const result = await Promise.resolve(num);

  return result;
};
