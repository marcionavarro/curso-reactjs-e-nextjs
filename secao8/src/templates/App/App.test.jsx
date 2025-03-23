import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;
  expect(headingContainer).toHaveStyle({ 'background': theme.colors.secondaryBg });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', theme.colors.secondaryBg);
});
