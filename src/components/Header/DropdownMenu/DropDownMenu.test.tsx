import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ADD_ITEM_TO_ORDER_MUTATION } from "../../../graphql/mutations/addItemToOrder.mutation";
import DropdownMenu from "./DropdownMenu";

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

const orderMock = {
  "id": 2,
  "code": "KZBKG8UX85G5NS52",
  "state": "AddingItems",
  "lines": [
    {
      "id": 4,
      "unitPrice": 32900,
      "linePrice": 32900,
      "linePriceWithTax": 39480,
      "quantity": 1,
      "productVariant": {
        "id": "5",
        "sku": "TBL200032",
        "name": "Tablet 32GB",
        "price": 32900,
      },
    }
  ],
  "total": 32900,
  "totalWithTax": 39480,
}

beforeEach(() => {
  render(
    <MockedProvider mocks={queryMock} addTypename={false}>
      <DropdownMenu activeOrder={orderMock} />
    </MockedProvider>
  );
})

describe('DropdownMenu.test.tsx', () => {
  it("Eender Order Details without error", async () => {
    const orderDetailsButton = screen.getByTestId('orderDetailsButton')

    act(() => {
      fireEvent.click(orderDetailsButton);
    });

    expect(await screen.findByText('Products details')).toBeInTheDocument();
  });

  it('Show order details', async () => {
    const orderDetailsButton = screen.getByTestId('orderDetailsButton')

    act(() => {
      fireEvent.click(orderDetailsButton);
    });

    expect(await screen.findByText(orderMock.lines[0].productVariant.name)).toBeInTheDocument();

  })
})
