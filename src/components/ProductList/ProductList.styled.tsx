import styled from "@emotion/styled"

export const PageContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80%',
  height: 'auto',
  margin: '5% auto'
}))

export const ProductsContainer = styled.section(() => ({
  display: 'grid',
  gap: '4rem',
  gridAutoColumns: '20rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(22rem, 1fr))',
  padding: '1%',
}))

export const LoadingContainer = styled.div(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))