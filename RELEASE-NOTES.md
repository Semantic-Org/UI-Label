### UI Changes

- **Input** - Input with dropdowns is now much easier, see docs. `action input` and `labeled input` now use `display: flex`. `ui action input` now supports `<button>` tag usage (!) which support `flex` but not `table-cell`
- **Label** - `ribbon label` can now be used inside `ui image` and `ui card` correctly

### Version 1.8.1 - January 26, 2015

- **Input** - `ui labeled input` now uses  `flex` added example in ui docs with dropdown

### Version 1.8.0 - January 23, 2015

- **Label** - Fixed `ui corner label` appearing on-top of `ui dropdown` menu due to issue in z-index heirarchy
- **Label** - Fixed issue with `ui ribbon label` not positioning itself correctly when using sizes like `small` or `large`

### Version 1.7.0 - January 14, 2015

- **Button** - Fix issue with labeled icon groups in material theme

### Version 1.6.4 - January 12, 2015

- `1.6.3` contained an unintentional character at beginning of `label.less` re-released as `1.6.4`
- **Build** - Fix CSS property typo in list icon, and label causing issues with some custom build tools

### Version 1.6.3 - January 12, 2015

- `1.6.3` contained an unintentional character at beginning of `label.less` re-released as `1.6.4`
- **Build** - Fix CSS property typo in list icon, and label causing issues with some custom build tools
- **Label** - Fix attached labels to have correct border radius inside of attached segments of all kinds

### Version 1.6.0 - January 05, 2015

- **Menu** - Fixes ``ui fluid labeled icon menu`` to not have `min-width`

### Version 1.5.0 - December 30, 2014

- **Label** - ``ui ribbon label`` can now appear on the right side of content when specifying ``ui right ribbon label``
- **Checkbox** - Checkboxes now can handle labels with multiple lines of text

### Version 1.4.0 - December 22, 2014

- **Progress** - Fixes bug where ``ui indicating progress`` would not update its label immediately in webkit

### Version 1.3.0 - December 17, 2014

- **Label** - Corner attached labels now display correctly inside of attached segments

### Version 1.2.0 - December 08, 2014

- **Checkbox** - JS Checkbox now handles several variations of html. Labels can be before inputs, after, or not included at all. This should work better with server side form generation.

### Version 1.0.0 - November 24, 2014

- **Label** - Corner labels no longer support text, only icons.
- **Input** - Labeled inputs now have ``corner`` ``left`` and ``top`` label types. Any labeled inputs should be converted to ``corner labeled input`` to preserve functionality from ``0.x``
- **Dropdown** - Many new content types now work inside dropdowns, headers, dividers, images, inputs, labels and more
- **Form** - Grouped fields and inline fields can now have labels
- **Form** - New field type ``required`` formats labels to show filling out field is mandatory
- **Label** - Added tag label and empty circular label style
- **Label** - Now has compact form, for fitting into tight spaces
- **Label** - Now has more sizes available
- **More [untracked changes](https://github.com/Semantic-Org/Semantic-UI/issues?q=is%3Aissue+label%3AEnhancement+is%3Aclosed) added as well**

### Version 0.18.0 - June 6, 2014

- **Label** - Fixes border radius on bottom left label

### Version 0.16.0 - April 22, 2014

- **Checkbox** - Fixes issue where checkboxes with multiple line labels were appearing formatted incorrectly.

### Version 0.15.0 - Mar 14, 2014

- **Input** - Fixes slight error in corner label rounding **Thanks MohammadYounes**

### Version 0.13.0 - Feb 20, 2014

- **Label** - Corner labels now are coupled to have rounded edges with components with rounded edges like input

### Version 0.9.0 - Nov 5, 2013

- **Input** - Labeled icons now have smaller corner labels
- **Button** - Fixes labeled icon placement in Chrome

### Version 0.8.3 - Oct 30, 2013

- **Form** - Errored fields now have their icons and corner labels colored appropriately
- **Labels** - Fixes formatting of links inside labels

### Version 0.7.0 - Oct 22, 2013

- **Menu** - Removes vertical label width missing units in menu
- **Label** - Ribbon labels now have a shadow color
- **List** - Increased padding on attached labels

### Version 0.6.1 - Oct 15, 2013

- Adds orange label/segment
- Fixes overflow on item corner label

### Version 0.4.0 - Oct 8, 2013

- Checkboxes markup now more semantic with default markup including only one label tag that can be inside ui checkbox

### Version 0.1.0 - Sep 25, 2013

- Increased size of corner labels
- Fixes display of left corner icon labels