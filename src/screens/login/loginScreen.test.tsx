import { render } from '@testing-library/react'
import LoginScreen from './loginScreen'

describe('<LoginScreen />', () => {
  it('should matchsnapshot', () => {
    const tree = render(<LoginScreen />)
    expect(tree).toMatchSnapshot()
  })
})
