interface ItemF {
  id: number;
  taskName: string;
  done: boolean;
}
export function arrayMap1() {
  const todos1: ItemF[] = [
    {
      id: 1,
      taskName: "Shopping go",
      done: false,
    },
    {
      id: 2,
      taskName: "Go to cinema",
      done: true,
    },
    {
      id: 3,
      taskName: "Go to the Class",
      done: false,
    },
  ];
  const newArr1: string[] = todos1.map((el): string => el["taskName"]);
  console.log(newArr1);
}
arrayMap1();
