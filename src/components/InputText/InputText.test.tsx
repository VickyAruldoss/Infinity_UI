import { render } from '@testing-library/react'
import InputText from './InputText'

describe('<InputText />', () => {
  it('should match snapshot', () => {
    const tree = render(<InputText />)
    expect(tree).toMatchSnapshot()
  })
})
