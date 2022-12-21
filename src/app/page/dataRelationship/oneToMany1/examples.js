export const productReviews = `
[
    {
        "products": [
              {
                "id": 1,
                "name": "Some product"
              }
        ],
        "reviews": [
              {
                "id": 2,
                "productId": 1,
                "text": "some text",
                "rate": 2.5
              },
              {
                "id": 3,
                "productId": 1,
                "text": "some text 2",
                "rate": 1.5
              }
          ]
      }
]`

export const gettingDenormalizedObject = `
    const storage = {
        products: [
              {
                id: 1,
                name: "Some product"
              }
            ],
        reviews: [
              {
                id: 2,
                productId: 1,
                text: "some text",
                rate: 2.5
              },
              {
                id: 3,
                productId: 1,
                text: "some text 2",
                rate: 1.5
              }
        ]
      };
      
      const getProdustWithRewievs = (storage) => {
        const { products, reviews } = storage;
          
        // Проходимся по всем товарам
        return products.map((product) => {
          return {
            ...product,
                  // Получаем все отзывы для данного товара
            reviews: reviews.filter(({ productId }) => productId === product.id)
          };
        });
      };
      
      // Вызываем
      const denormalizedStorage = getProdustWithRewievs(storage);`

export const denormalizedObject = `
    [
        {
          "id": 1,
          "name": "Some product",
          "reviews": [
            {
              "id": 2,
              "productId": 1,
              "text": "some text",
              "rate": 2.5
            },
            {
              "id": 3,
              "productId": 1,
              "text": "some text 2",
              "rate": 1.5
            }
          ]
        }
      ]`
