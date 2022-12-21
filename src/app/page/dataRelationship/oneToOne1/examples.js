export const manufacturers = `
    {
        "manufacturers": [
          {
            "id": 1,
            "name": "Some Manufacturer"
          }
        ],
        "products": [
          {
            "id": 2,
            "name": "Some Product",
            "manufacturerId": 1
          }
        ]
      }
`

export const storage = `
    const storage = {
        manufacturers: [
          {
            id: 1,
            name: "Some Manufacturer"
          }
        ],
        products: [
          {
            id: 2,
            name: "Some Product",
            manufacturerId: 1
          }
        ]
      };
      
      const getProductsWithManufacturer = (storage) => {
          // Получаем товары и производителей
        const { manufacturers, products } = storage;
      
          // Проходимся по всем товарам
        return products.map((product) => {
      
              // Получаем id производителя у товара
          const { manufacturerId, ...rest } = product;
      
              // Находим производителя
          const manufacturer = manufacturers.find(({ id }) => id === manufacturerId);
      
          // Возвращаем товар и прозводителя
              return {
            ...rest,
            manufacturer
          };
        });
      };
      
      // Вызываем
      const denormalizedStorage = getProductsWithManufacturer(storage);
`

export const someProduct = `
    [
        {
          "id": 2,
          "name": "Some Product",
          "manufacturer": {
            "id": 1,
            "name": "Some Manufacturer"
          }
        }
      ]
`
