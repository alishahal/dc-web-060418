#Pet Hotel CSS lecture

Navigating the app:
-Pets show is plain Css
-Owners show is bootstrap

-What is CSS?
	-Cascading stylesheets
-Css garden website: http://www.csszengarden.com/
-dev tools/ view source

-Ruby on Rails CSS stylesheet
-classes and ids
-selectors
	-Practicing with selectors- Css diner- https://flukeout.github.io/
-css docs- W3Schools, Mozilla Developer Network
-colors- web safe, rgb, hexcodes
-box model- content, padding, border, margin
-best practices
	-!important
	-no inline
	-precedence
	-external stylesheets

Positioning before grid system:
Normalize files- solves compatibility issues across different browsers
Flexbox - flexbox froggy- https://flexboxfroggy.com/



-JS adding CSS Libraries
-linking in a library
-script tags

Common Theme Libraries:
Bootstrap/ semantic/ materialize/ bulma

Rails bootstrap gem: https://github.com/twbs/bootstrap-rubygem
** for bootstrap 4

Grid system ****Always put a column inside your row
** 12 units long
*** don’t mix and match your small, medium, large

Responsive -media queries with breakpoints
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);

Other CSS tools to look into:
Sass
Less
