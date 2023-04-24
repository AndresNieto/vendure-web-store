import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import ProductListComponent from './components/ProductList/ProductList';

describe('ProductList', () => {
  it('renders text and button', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductListComponent />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
  });
});
