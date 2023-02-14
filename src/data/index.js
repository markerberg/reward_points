const customerPurchases = [
    {
      name: 'Sara',
      purchases: [
        {date: "2022-12-21", amount: 220},
        {date: "2022-12-24", amount: 620},
        {date: "2023-01-10", amount: 20},
        {date: "2022-02-09", amount: 80}
      ]
    },
    {
      name: 'Mike',
      purchases: [
        {date: "2022-12-11", amount: 120},
        {date: "2022-12-29", amount: 900},
        {date: "2023-01-21", amount: 220},
        {date: "2022-02-10", amount: 75}
      ]
    },
    {
      name: 'Mark',
      purchases: [
        {date: "2022-12-17", amount: 150},
        {date: "2022-12-27", amount: 320},
        {date: "2023-01-14", amount: 10},
        {date: "2022-02-04", amount: 1000}
      ]
    },
    {
      name: 'Sam',
      purchases: [
        {date: "2022-12-04", amount: 1220},
        {date: "2022-12-25", amount: 820},
        {date: "2023-01-01", amount: 0},
        {date: "2022-01-30", amount: 400}
      ]
    }
  ];
  
  export function mockAPICall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(customerPurchases);
      }, 1500);
    });
  }