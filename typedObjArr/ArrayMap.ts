interface ItemF {
  id: number;
  taskName: string;
  done: boolean;
}
export function arrayMap1(): void {
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
  const newArr2: ItemF[] = todos1.filter((el): ItemF | undefined => {
    if (el.done === true) {
      return el;
    }
  });
  console.log(newArr2);

  const newArr3 = todos1.reduce<string>((acc, curr): string => {
    return acc + " " + curr.taskName;
  }, "");
  console.log("reduce", newArr3);
}
arrayMap1();
