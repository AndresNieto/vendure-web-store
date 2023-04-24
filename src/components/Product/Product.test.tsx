import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ADD_ITEM_TO_ORDER_MUTATION } from "../../graphql/mutations/addItemToOrder.mutation";
import ProductComponent from "./Product";

const queryMock = [
  {
    request: {
      query: ADD_ITEM_TO_ORDER_MUTATION,
      variables: {
        productId: "5", qty: 1
      }
    },
    result: {
      "data": {
        "addItemToOrder": {
          "id": "2",
          "code": "KZBKG8UX85G5NS52",
          "state": "AddingItems",
          "lines": [
            {
              "id": "4",
              "unitPrice": 32900,
              "linePrice": 32900,
              "linePriceWithTax": 39480,
              "quantity": 1,
              "productVariant": {
                "id": "5",
                "sku": "TBL200032",
                "name": "Tablet 32GB",
                "price": 32900,
                "product": {
                  "name": "Tablet",
                  "slug": "tablet",
                  "__typename": "Product"
                },
                "__typename": "ProductVariant"
              },
              "__typename": "OrderLine"
            }
          ],
          "subTotal": 32900,
          "subTotalWithTax": 39480,
          "__typename": "Order"
        }
      }
    }
  }
];

const productMock = {
  "id": "54",
  "title": "Modern Cafe Chair",
  "price": "10000",
  "featuredImage": {
    "width": 1067,
    "height": 1600,
    "preview": "https://demo.vendure.io/assets/preview/b1/jean-philippe-delberghe-1400011-unsplash__preview.jpg"
  },
  "description": "You sit comfortably thanks to the restful flexibility of the seat. Lightweight and easy to move around, yet stable enough even for the liveliest, young family members.",
  "variants": [
    {
      "id": "86",
      "sku": "404.038.96",
      "name": "Modern Cafe Chair mustard",
      "productId": 54,
      "price": 10000
    },
    {
      "id": "87",
      "sku": "404.038.96",
      "name": "Modern Cafe Chair mint",
      "productId": 54,
      "price": 10000
    },
    {
      "id": "88",
      "sku": "404.038.96",
      "name": "Modern Cafe Chair pearl",
      "productId": 54,
      "price": 10000
    }
  ]
};

beforeEach(() => {
  render(
    <MockedProvider mocks={queryMock} addTypename={false}>
      <ProductComponent product={productMock} />
    </MockedProvider>
  );
})

describe('PropductListing.test.tsx', () => {
  it("renders Product without error", async () => {
    expect(await screen.findByText(productMock.title)).toBeInTheDocument();
  });

  it('Enable buy button', () => {
    let quantityInput: any = null;

    quantityInput = screen.getByTestId('quantityInput')

    // Buy button is disabled at start
    const isBuyButtonDisabled = quantityInput?.getAttribute('disabled');
    expect(isBuyButtonDisabled);

    // Buy button will be enabled after change quantity
    fireEvent.change(quantityInput, {
      target: { value: 1 }
    });

    const isBuyButtonEnabled = !quantityInput?.getAttribute('disabled');
    expect(isBuyButtonEnabled);

  })
})
