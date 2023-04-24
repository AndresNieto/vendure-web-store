import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import ProductListComponent from "./ProductList";
import { GET_PRODUCTS } from "../../graphql/queries/product.query";

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: {}
    },
    result: {
      "data": {
        "products": {
          "items": [
            {
              "id": "1",
              "name": "Laptop",
              "slug": "laptop",
              "description": "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
              "featuredAsset": {
                "width": 1600,
                "height": 1200,
                "preview": "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg",
                "__typename": "Asset"
              },
              "variants": [
                {
                  "id": "1",
                  "sku": "L2201308",
                  "name": "Laptop 13 inch 8GB",
                  "productId": "1",
                  "price": 129900,
                  "__typename": "ProductVariant"
                },
                {
                  "id": "2",
                  "sku": "L2201508",
                  "name": "Laptop 15 inch 8GB",
                  "productId": "1",
                  "price": 139900,
                  "__typename": "ProductVariant"
                },
                {
                  "id": "3",
                  "sku": "L2201316",
                  "name": "Laptop 13 inch 16GB",
                  "productId": "1",
                  "price": 219900,
                  "__typename": "ProductVariant"
                },
                {
                  "id": "4",
                  "sku": "L2201516",
                  "name": "Laptop 15 inch 16GB",
                  "productId": "1",
                  "price": 229900,
                  "__typename": "ProductVariant"
                }
              ],
              "__typename": "Product"
            },
            {
              "id": "2",
              "name": "Tablet",
              "slug": "tablet",
              "description": "If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a \"computer.\" It would be Tablet.",
              "featuredAsset": {
                "width": 1600,
                "height": 1067,
                "preview": "https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg",
                "__typename": "Asset"
              },
              "variants": [
                {
                  "id": "5",
                  "sku": "TBL200032",
                  "name": "Tablet 32GB",
                  "productId": "2",
                  "price": 32900,
                  "__typename": "ProductVariant"
                },
                {
                  "id": "6",
                  "sku": "TBL200128",
                  "name": "Tablet 128GB",
                  "productId": "2",
                  "price": 44500,
                  "__typename": "ProductVariant"
                }
              ],
              "__typename": "Product"
            },
            {
              "id": "3",
              "name": "Wireless Optical Mouse",
              "slug": "cordless-mouse",
              "description": "The Logitech M185 Wireless Optical Mouse is a great device for any computer user, and as Logitech are the global market leaders for these devices, you are also guaranteed absolute reliability. A mouse to be reckoned with!",
              "featuredAsset": {
                "width": 1600,
                "height": 1071,
                "preview": "https://demo.vendure.io/assets/preview/a1/oscar-ivan-esquivel-arteaga-687447-unsplash__preview.jpg",
                "__typename": "Asset"
              },
              "variants": [
                {
                  "id": "7",
                  "sku": "834444",
                  "name": "Wireless Optical Mouse",
                  "productId": "3",
                  "price": 1899,
                  "__typename": "ProductVariant"
                }
              ],
              "__typename": "Product"
            },
            {
              "id": "4",
              "name": "32-Inch Monitor",
              "slug": "32-inch-monitor",
              "description": "The UJ59 with Ultra HD resolution has 4x the pixels of Full HD, delivering more screen space and amazingly life-like images. That means you can view documents and webpages with less scrolling, work more comfortably with multiple windows and toolbars, and enjoy photos, videos and games in stunning 4K quality. Note: beverage not included.",
              "featuredAsset": {
                "width": 1280,
                "height": 1600,
                "preview": "https://demo.vendure.io/assets/preview/d2/daniel-korpai-1302051-unsplash__preview.jpg",
                "__typename": "Asset"
              },
              "variants": [
                {
                  "id": "8",
                  "sku": "LU32J590UQUXEN",
                  "name": "32-Inch Monitor",
                  "productId": "4",
                  "price": 31000,
                  "__typename": "ProductVariant"
                }
              ],
              "__typename": "Product"
            },
            {
              "id": "5",
              "name": "Curvy Monitor",
              "slug": "curvy-monitor",
              "description": "Discover a truly immersive viewing experience with this monitor curved more deeply than any other. Wrapping around your field of vision the 1,800 R screencreates a wider field of view, enhances depth perception, and minimises peripheral distractions to draw you deeper in to your content.",
              "featuredAsset": {
                "width": 1067,
                "height": 1600,
                "preview": "https://demo.vendure.io/assets/preview/9c/alexandru-acea-686569-unsplash__preview.jpg",
                "__typename": "Asset"
              },
              "variants": [
                {
                  "id": "9",
                  "sku": "C24F390",
                  "name": "Curvy Monitor 24 inch",
                  "productId": "5",
                  "price": 14374,
                  "__typename": "ProductVariant"
                },
                {
                  "id": "10",
                  "sku": "C27F390",
                  "name": "Curvy Monitor 27 inch",
                  "productId": "5",
                  "price": 16994,
                  "__typename": "ProductVariant"
                }
              ],
              "__typename": "Product"
            },
            {
              "id": "6",
              "name": "High Performance RAM",
              "slug": "high-performance-ram",
              "description": "Each RAM module is built with a pure aluminium heat spreader for faster heat dissipation and cooler operation. Enhanced to XMP 2.0 profiles for better overclocking; Compatibility: Intel 100 Series, Intel 200 Series, Intel 300 Series, Intel X299, AMD 300 Series, AMD 400 Series.",
              "featuredAsset": {
                "width": 1600,
                "height": 1067,
                "preview": "https://demo.vendure.io/assets/preview/58/liam-briese-1128307-unsplash__preview.jpg",
                "__typename": "Asset"
              },
              "variants": [
                {
                  "id": "11",
                  "sku": "CMK32GX4M2AC04",
                  "name": "High Performance RAM 4GB",
                  "productId": "6",
                  "price": 13785,
                  "__typename": "ProductVariant"
                },
                {
                  "id": "12",
                  "sku": "CMK32GX4M2AC08",
                  "name": "High Performance RAM 8GB",
                  "productId": "6",
                  "price": 14639,
                  "__typename": "ProductVariant"
                },
                {
                  "id": "13",
                  "sku": "CMK32GX4M2AC16",
                  "name": "High Performance RAM 16GB",
                  "productId": "6",
                  "price": 28181,
                  "__typename": "ProductVariant"
                }
              ],
              "__typename": "Product"
            }
          ]
        }
      }
    }
  }
];

beforeEach(() => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ProductListComponent />
    </MockedProvider>
  );
})

describe('PropductListing.test.tsx', () => {
  it("renders without error", async () => {
    const { result: { data: { products: { items } } } } = mocks[0];

    expect(await screen.findByText(items[0].name)).toBeInTheDocument();
  });
})

