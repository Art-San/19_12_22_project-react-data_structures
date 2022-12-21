export const arrayExample = `
    const orders = [
        {
          id: 1,
          date: "10.04.2022",
          products: [
            {
              id: 1,
              price: 200,
              currency: "RUB",
              name: "Коробка с сюрпризом"
            }
          ]
        },
        {
          id: 2,
          date: "11.04.2022",
          products: [
            {
              id: 1,
              price: 200,
              currency: "RUB",
              name: "Коробка с сюрпризом"
            }
          ]
        }
      ];

`

export const exampleDenormalization = `
    {
        "id": "2778b73c-228a-4f4f-8e3e-97e775ab45c3",
        "shipment": {
                "type": {
                    "id": "50d18e44-a9bf-4a1d-9fba-fa8c73f25dcc",
                        "company": "CDEK"
          },
          "details": {
                "price": 200.0,
                "currency": "RUB",
                "adress": {
                    "id": "a06b07e0-ccc1-45a3-917c-26591acba433",
                    "steet": "ул. Мотросов",
                    "city": "г. Неназванный",
                    "apartament": "1"
                }
            }
        }
    }
`

export const exampleNormalization = `
    {
        "dictionaries": {
          "shipments": [
            {
              "id": "50d18e44-a9bf-4a1d-9fba-fa8c73f25dcc",
              "company": "CDEK"
            },
            {
              "id": "9dac7961-fd65-43d6-9873-715338de09d5",
              "company": "PonyExpress"
            },
            {
              "id": "05ff6f98-feae-41d6-b57e-5788e1e09aab",
              "company": "DPD"
            }
          ]
        },
        "orders": [
          {
            "id": "d7eea0e2-ab44-4839-8dab-cffc9ecdf599",
            "price": 245.5,
            "shipmentTypeId": "50d18e44-a9bf-4a1d-9fba-fa8c73f25dcc"
          },
          {
            "id": "15d15297-06f7-4729-a015-174eb6e56603",
            "price": 2798.9,
            "shipmentTypeId": "50d18e44-a9bf-4a1d-9fba-fa8c73f25dcc"
          }
        ]
      }
`

export const discount = `
    {
        "discountDictionaries": [
          { "id": 1, "value": "5%", "title": "Скидка 5%" },
          { "id": 2, "value": "10%", "title": "Скидка 10%" },
          { "id": 3, "value": "15%", "title": "Скидка 15%" }
        ]
`

export const discountUser = `
    {
        "discountDictionaries": [
          { "id": 1, "value": "5%", "title": "Скидка 5%" },
          { "id": 2, "value": "10%", "title": "Скидка 10%" },
          { "id": 3, "value": "15%", "title": "Скидка 15%" }
        ],
        "order": {
          "id": 1000,
          "discountId": 1,
          ...
        }
      }
`

export const memoizeData = `
    const OrderPage = (props) => {
        const { discountDictionaries, order } = props;
    
        const pageData = useMemo(()=>{
            const { discountId, ...rest } = order;
            const discount = discountDictionaries.find(
                ({ id }) => id === discountId
            );
            return {
                ...rest,
                discountTitle: discount.title
            };
        }, [discountDictionaries, order]);
    
        return (/* ... */);
    }`

export const resultat = `
    {
        "id": 1000,
        "discountTitle": "Скидка 5%",
        ...
      }
`
