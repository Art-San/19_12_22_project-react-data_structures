export const properties = `
{
    "properties": [
      {
        "id": 1,
        "name": "Some Propery 1"
      },
      {
        "id": 2,
        "name": "Some Propery 2"
      }
    ],
    "products": [
      {
        "id": 1,
        "name": "Some Product 1"
      },
      {
        "id": 2,
        "name": "Some Product 2"
      }
    ],
    "productProperty": [
      {
        "productId": 1,
        "propertyId": 1
      },
      {
        "productId": 1,
        "propertyId": 2
      },
      {
        "productId": 2,
        "propertyId": 1
      },
      {
        "productId": 2,
        "propertyId": 2
      }
    ]
  }
`

export const getPropductsWithProps = `
const getPropductsWithProps = (storage) => {
    const { properties, products, productProperty } = storage;
      
    // Проходимся по всем товарам
    return products.map((product) => {
  
      // Фильтруем для товара список свойств
      const currentProps = properties.filter((property) => {
  
        // Ищем в productProperty те, в которых есть наш товар
        return productProperty
          .filter(({ productId }) => {
            return productId === product.id;
          })
          // Получаем только propertyId
          .map(({ propertyId }) => propertyId)
          // И проверяем, есть ли id текущего property в списке
          .includes(property.id);
      });
      
  
      // Возвращаем результат
      return {
        ...product,
        properties: currentProps
      };
    });
  };
  
  // NOTE filter и map можно объеденить в reduce (чтобы цикл проходил один раз)
  // Такая реализация была выбрана для более легкого понимания
`

export const result = `
[
    {
      "id": 1,
      "name": "Some Product 1",
      "properties": [
        {
          "id": 1,
          "name": "Some Propery 1"
        },
        {
          "id": 2,
          "name": "Some Propery 2"
        }
      ]
    },
    {
      "id": 2,
      "name": "Some Product 2",
      "properties": [
        {
          "id": 1,
          "name": "Some Propery 1"
        },
        {
          "id": 2,
          "name": "Some Propery 2"
        }
      ]
    }
  ]
`
