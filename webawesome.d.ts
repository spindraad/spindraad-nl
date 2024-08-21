declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * A component for displaying animated GIFs and WEBPs that play and pause on interaction.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-load** - Emitted when the image loads successfully.
       * - **wa-error** - Emitted when the image fails to load.
       * 
       * ### **Slots:**
       *  - **play-icon** - Optional play icon to use instead of the default. Works best with `<wa-icon>`.
       * - **pause-icon** - Optional pause icon to use instead of the default. Works best with `<wa-icon>`.
       * 
       * ### **CSS Properties:**
       *  - **--control-box-size** - The size of the icon box. _(default: undefined)_
       * - **--icon-size** - The size of the play/pause icons. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **control-box** - The container that surrounds the pause/play icons and provides their background.
       */
      "wa-animated-image": {
        /**
         * The path to the image to load.
         */
        "src"?: string;
        /**
         * A description of the image used by assistive devices.
         */
        "alt"?: string;
        /**
         * Plays the animation. When this attribute is remove, the animation will pause.
         */
        "play"?: string;
        "children"?: any;
      };
      /**
       * Avatars are used to represent a person or object.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - **icon** - The default icon to use when no image or initials are present. Works best with `<wa-icon>`.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The avatar's background color. _(default: undefined)_
       * - **--content-color** - The color of the avatar's content. _(default: undefined)_
       * - **--size** - The size of the avatar. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **icon** - The container that wraps the avatar's icon.
       * - **initials** - The container that wraps the avatar's initials.
       * - **image** - The avatar image. Only shown when the `image` attribute is set.
       */
      "wa-avatar": {
        /**
         * The image source to use for the avatar.
         */
        "image"?: string;
        /**
         * A label to use to describe the avatar to assistive devices.
         */
        "label"?: string;
        /**
         * Initials to use as a fallback when no image is available (1-2 characters max recommended).
         */
        "initials"?: string;
        /**
         * Indicates how the browser should load the image.
         */
        "loading"?: "eager" | "lazy";
        /**
         * The shape of the avatar.
         */
        "shape"?: "circle" | "square" | "rounded";
        "children"?: any;
      };
      /**
       * Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-cancel** - Emitted when the animation is canceled.
       * - **wa-finish** - Emitted when the animation finishes.
       * - **wa-start** - Emitted when the animation starts or restarts.
       * 
       * ### **Methods:**
       *  - **cancel()** - Clears all keyframe effects caused by this animation and aborts its playback.
       * - **finish()** - Sets the playback time to the end of the animation corresponding to the current playback direction.
       * 
       * ### **Slots:**
       *  - _default_ - The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<wa-animation>` elements.
       */
      "wa-animation": {
        /**
         * The name of the built-in animation to use. For custom animations, use the `keyframes` prop.
         */
        "name"?: string;
        /**
         * Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
         * the animation finishes or gets canceled.
         */
        "play"?: string;
        /**
         * The number of milliseconds to delay the start of the animation.
         */
        "delay"?: string;
        /**
         * Determines the direction of playback as well as the behavior when reaching the end of an iteration.
         * [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
         */
        "direction"?: "PlaybackDirection";
        /**
         * The number of milliseconds each iteration of the animation takes to complete.
         */
        "duration"?: string;
        /**
         * The easing function to use for the animation. This can be a Web Awesome easing function or a custom easing function
         * such as `cubic-bezier(0, 1, .76, 1.14)`.
         */
        "easing"?: string;
        /**
         * The number of milliseconds to delay after the active period of an animation sequence.
         */
        "end-delay"?: string;
        /**
         * Sets how the animation applies styles to its target before and after its execution.
         */
        "fill"?: "FillMode";
        /**
         * The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.
         */
        "iterations"?: string;
        /**
         * The offset at which to start the animation, usually between 0 (start) and 1 (end).
         */
        "iteration-start"?: string;
        /**
         * Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
         * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
         * value can be changed without causing the animation to restart.
         */
        "playback-rate"?: string;
        "children"?: any;
      };
      /**
       * Badges are used to draw attention and display statuses or counts.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The badge's content.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The badge's background color. _(default: undefined)_
       * - **--border-color** - The color of the badge's border. _(default: undefined)_
       * - **--border-radius** - The radius of the badge's corners. _(default: undefined)_
       * - **--border-style** - The style of the badge's border. _(default: undefined)_
       * - **--border-width** - The width of the badge's border. _(default: undefined)_
       * - **--content-color** - The color of the badge's content. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-badge": {
        /**
         * The badge's theme variant.
         */
        "variant"?: "brand" | "success" | "neutral" | "warning" | "danger";
        /**
         * Draws a pill-style badge with rounded edges.
         */
        "pill"?: string;
        /**
         * Makes the badge pulsate to draw attention.
         */
        "pulse"?: string;
        "children"?: any;
      };
      /**
       * Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - One or more breadcrumb items to display.
       * - **separator** - The separator to use between breadcrumb items. Works best with `<wa-icon>`.
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-breadcrumb": {
        /**
         * The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
         * screen readers and other assistive devices to provide more context for users.
         */
        "label"?: string;
        "children"?: any;
      };
      /**
       * Breadcrumb Items are used inside [breadcrumbs](/docs/components/breadcrumb) to represent different links.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The breadcrumb item's label.
       * - **prefix** - An optional prefix, usually an icon or icon button.
       * - **suffix** - An optional suffix, usually an icon or icon button.
       * - **separator** - The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<wa-breadcrumb>` instead.
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **label** - The breadcrumb item's label.
       * - **prefix** - The container that wraps the prefix.
       * - **suffix** - The container that wraps the suffix.
       * - **separator** - The container that wraps the separator.
       */
      "wa-breadcrumb-item": {
        /**
         * Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
         * internally. When unset, a button will be rendered instead.
         */
        "href"?: string;
        /**
         * Tells the browser where to open the link. Only used when `href` is set.
         */
        "target"?: "_blank" | "_parent" | "_self" | "_top";
        /**
         * The `rel` attribute to use on the link. Only used when `href` is set.
         */
        "rel"?: string;
        "children"?: any;
      };
      /**
       * Buttons represent actions that are available to the user.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the button loses focus.
       * - **wa-focus** - Emitted when the button gains focus.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Methods:**
       *  - **click()** - Simulates a click on the button.
       * - **focus(options: _FocusOptions_)** - Sets focus on the button.
       * - **blur()** - Removes focus from the button.
       * 
       * ### **Slots:**
       *  - _default_ - The button's label.
       * - **prefix** - A presentational prefix icon or similar element.
       * - **suffix** - A presentational suffix icon or similar element.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The button's background color. _(default: undefined)_
       * - **--background-color-active** - The button's background color when active. _(default: undefined)_
       * - **--background-color-hover** - The button's background color on hover. _(default: undefined)_
       * - **--border-color** - The color of the button's border. _(default: undefined)_
       * - **--border-color-active** - The color of the button's border when active. _(default: undefined)_
       * - **--border-color-hover** - The color of the button's border on hover. _(default: undefined)_
       * - **--border-radius** - The radius of the button's corners. _(default: undefined)_
       * - **--border-style** - The style of the button's border. _(default: undefined)_
       * - **--border-width** - The width of the button's border. Expects a single value. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the button. _(default: undefined)_
       * - **--label-color** - The color of the button's label. _(default: undefined)_
       * - **--label-color-active** - The color of the button's label when active. _(default: undefined)_
       * - **--label-color-hover** - The color of the button's label on hover. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **prefix** - The container that wraps the prefix.
       * - **label** - The button's label.
       * - **suffix** - The container that wraps the suffix.
       * - **caret** - The button's caret icon, a `<wa-icon>` element.
       * - **spinner** - The spinner that shows when the button is in the loading state.
       */
      "wa-button": {
        "title"?: string;
        /**
         * The button's theme variant.
         */
        "variant"?: "neutral" | "brand" | "success" | "warning" | "danger";
        /**
         * The button's visual appearance.
         */
        "appearance"?: "filled" | "tinted" | "outlined" | "text";
        /**
         * The button's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.
         */
        "caret"?: string;
        /**
         * Disables the button. Does not apply to link buttons.
         */
        "disabled"?: string;
        /**
         * Draws the button in a loading state.
         */
        "loading"?: string;
        /**
         * Draws a pill-style button with rounded edges.
         */
        "pill"?: string;
        /**
         * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
         * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
         */
        "type"?: "button" | "submit" | "reset";
        /**
         * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
         * This attribute is ignored when `href` is present.
         */
        "name"?: string;
        /**
         * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
         * button is the submitter. This attribute is ignored when `href` is present.
         */
        "value"?: string;
        /**
         * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
         */
        "href"?: string;
        /**
         * Tells the browser where to open the link. Only used when `href` is present.
         */
        "target"?: "_blank" | "_parent" | "_self" | "_top";
        /**
         * When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
         * default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
         * specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
         * setting the attribute to an empty string or a value of your choice, respectively.
         */
        "rel"?: string;
        /**
         * Tells the browser to download the linked file as this filename. Only used when `href` is present.
         */
        "download"?: string;
        /**
         * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
         * value of this attribute must be an id of a form in the same document or shadow root as the button.
         */
        "form"?: string;
        /**
         * Used to override the form owner's `action` attribute.
         */
        "formaction"?: string;
        /**
         * Used to override the form owner's `enctype` attribute.
         */
        "formenctype"?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
        /**
         * Used to override the form owner's `method` attribute.
         */
        "formmethod"?: "post" | "get";
        /**
         * Used to override the form owner's `novalidate` attribute.
         */
        "formnovalidate"?: string;
        /**
         * Used to override the form owner's `target` attribute.
         */
        "formtarget"?: "_self" | "_blank" | "_parent" | "_top";
        "children"?: any;
      };
      /**
       * Button groups can be used to group related buttons into sections.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - One or more `<wa-button>` elements to display in the button group.
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-button-group": {
        /**
         * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
         * devices when interacting with the control and is strongly recommended.
         */
        "label"?: string;
        "children"?: any;
      };
      /**
       * Callouts are used to display important messages inline.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The callout's main content.
       * - **icon** - An icon to show in the callout. Works best with `<wa-icon>`.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The callout's background color. _(default: undefined)_
       * - **--border-color** - The color of the callout's border. _(default: undefined)_
       * - **--border-radius** - The radius of the callout's corners. _(default: undefined)_
       * - **--border-style** - The style of the callout's borders. _(default: undefined)_
       * - **--border-width** - The width of the callout's borders. _(default: undefined)_
       * - **--content-color** - The color of the callout's content. _(default: undefined)_
       * - **--icon-color** - The color of the callout's icon. _(default: undefined)_
       * - **--icon-size** - The size of the callout's icon. _(default: undefined)_
       * - **--spacing** - The amount of space around and between the callout's content. Expects a single value. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **icon** - The container that wraps the optional icon.
       * - **message** - The container that wraps the callout's main content.
       */
      "wa-callout": {
        /**
         * The callout's theme variant.
         */
        "variant"?: "brand" | "success" | "neutral" | "warning" | "danger";
        "children"?: any;
      };
      /**
       * Cards can be used to group related subjects in a container.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The card's main content.
       * - **header** - An optional header for the card.
       * - **footer** - An optional footer for the card.
       * - **image** - An optional image to render at the start of the card.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The card's background color. _(default: undefined)_
       * - **--border-color** - The card's border color, including borders that occur inside the card. _(default: undefined)_
       * - **--border-radius** - The radius for the card's corners. Expects a single value. _(default: undefined)_
       * - **--border-style** - The style of the card's borders. _(default: undefined)_
       * - **--border-width** - The width of the card's borders. Expects a single value. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the card. _(default: undefined)_
       * - **--spacing** - The amount of space around and between sections of the card. Expects a single value. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **image** - The container that wraps the card's image.
       * - **header** - The container that wraps the card's header.
       * - **body** - The container that wraps the card's main content.
       * - **footer** - The container that wraps the card's footer.
       */
      "wa-card": {
        /**
         * Renders the card with a header
         */
        "with-header"?: string;
        /**
         * Renders the card with an image
         */
        "with-image"?: string;
        /**
         * Renders the card with a footer
         */
        "with-footer"?: string;
        "children"?: any;
      };
      /**
       * Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-slide-change** - Emitted when the active slide changes.
       * 
       * ### **Methods:**
       *  - **previous(behavior: _ScrollBehavior_)** - Move the carousel backward by `slides-per-move` slides.
       * - **next(behavior: _ScrollBehavior_)** - Move the carousel forward by `slides-per-move` slides.
       * - **goToSlide(index: _number_, behavior: _ScrollBehavior_)** - Scrolls the carousel to the slide specified by `index`.
       * 
       * ### **Slots:**
       *  - _default_ - The carousel's main content, one or more `<wa-carousel-item>` elements.
       * - **next-icon** - Optional next icon to use instead of the default. Works best with `<wa-icon>`.
       * - **previous-icon** - Optional previous icon to use instead of the default. Works best with `<wa-icon>`.
       * 
       * ### **CSS Properties:**
       *  - **--aspect-ratio** - The aspect ratio of each slide. _(default: 16/9)_
       * - **--navigation-color** - The color of the navigation arrows. _(default: undefined)_
       * - **--pagination-color** - The color of the dots indicating the number of slides. _(default: undefined)_
       * - **--pagination-color-active** - The color of the dot indicating the active slide. _(default: undefined)_
       * - **--scroll-hint** - The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. _(default: undefined)_
       * - **--slide-gap** - The space between each slide. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The carousel's internal wrapper.
       * - **scroll-container** - The scroll container that wraps the slides.
       * - **pagination** - The pagination indicators wrapper.
       * - **pagination-item** - The pagination indicator.
       * - **pagination-item--active** - Applied when the item is active.
       * - **navigation** - The navigation wrapper.
       * - **navigation-button** - The navigation button.
       * - **navigation-button--previous** - Applied to the previous button.
       * - **navigation-button--next** - Applied to the next button.
       */
      "wa-carousel": {
        /**
         * When set, allows the user to navigate the carousel in the same direction indefinitely.
         */
        "loop"?: string;
        /**
         * When set, show the carousel's navigation.
         */
        "navigation"?: string;
        /**
         * When set, show the carousel's pagination indicators.
         */
        "pagination"?: string;
        /**
         * When set, the slides will scroll automatically when the user is not interacting with them.
         */
        "autoplay"?: string;
        /**
         * Specifies the amount of time, in milliseconds, between each automatic scroll.
         */
        "autoplay-interval"?: string;
        /**
         * Specifies how many slides should be shown at a given time.
         */
        "slides-per-page"?: string;
        /**
         * Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
         * greater than one. It can't be higher than `slides-per-page`.
         */
        "slides-per-move"?: string;
        /**
         * Specifies the orientation in which the carousel will lay out.
         */
        "orientation"?: "horizontal" | "vertical";
        /**
         * When set, it is possible to scroll through the slides by dragging them with the mouse.
         */
        "mouse-dragging"?: string;
        "children"?: any;
      };
      /**
       * A carousel item represent a slide within a [carousel](/docs/components/carousel).
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The carousel item's content..
       * 
       * ### **CSS Properties:**
       *  - **--aspect-ratio** - The slide's aspect ratio. Inherited from the carousel by default. _(default: undefined)_
       */
      "wa-carousel-item": {
        "children"?: any;
      };
      /**
       * Checkboxes allow the user to toggle an option on or off.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the checkbox loses focus.
       * - **wa-change** - Emitted when the checked state changes.
       * - **wa-focus** - Emitted when the checkbox gains focus.
       * - **wa-input** - Emitted when the checkbox receives input.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Methods:**
       *  - **click()** - Simulates a click on the checkbox.
       * - **focus(options: _FocusOptions_)** - Sets focus on the checkbox.
       * - **blur()** - Removes focus from the checkbox.
       * 
       * ### **Slots:**
       *  - _default_ - The checkbox's label.
       * - **help-text** - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The checkbox's background color. _(default: undefined)_
       * - **--background-color-checked** - The checkbox's background color when checked. _(default: undefined)_
       * - **--border-color** - The color of the checkbox's borders. _(default: undefined)_
       * - **--border-color-checked** - The color of the checkbox's borders when checked. _(default: undefined)_
       * - **--border-radius** - The radius of the checkbox's corners. _(default: undefined)_
       * - **--border-style** - The style of the checkbox's borders. _(default: undefined)_
       * - **--border-width** - The width of the checkbox's borders. Expects a single value. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the checkbox. _(default: undefined)_
       * - **--toggle-size** - The size of the checkbox. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **control** - The square container that wraps the checkbox's checked state.
       * - **control--checked** - Matches the control part when the checkbox is checked.
       * - **control--indeterminate** - Matches the control part when the checkbox is indeterminate.
       * - **checked-icon** - The checked icon, a `<wa-icon>` element.
       * - **indeterminate-icon** - The indeterminate icon, a `<wa-icon>` element.
       * - **label** - The container that wraps the checkbox's label.
       * - **form-control-help-text** - The help text's wrapper.
       */
      "wa-checkbox": {
        "title"?: string;
        /**
         * The name of the checkbox, submitted as a name/value pair with form data.
         */
        "name"?: string;
        /**
         * The current value of the checkbox, submitted as a name/value pair with form data.
         */
        "value"?: string;
        /**
         * The checkbox's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Disables the checkbox.
         */
        "disabled"?: string;
        /**
         * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
         * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
         */
        "indeterminate"?: string;
        /**
         * The default value of the form control. Primarily used for resetting the form control.
         */
        "checked"?: string;
        /**
         * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
         * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
         * the same document or shadow root for this to work.
         */
        "form"?: string;
        /**
         * Makes the checkbox a required field.
         */
        "required"?: string;
        /**
         * The checkbox's help text. If you need to display HTML, use the `help-text` slot instead.
         */
        "help-text"?: string;
        "children"?: any;
      };
      /**
       * Color pickers allow the user to select a color.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the color picker loses focus.
       * - **wa-change** - Emitted when the color picker's value changes.
       * - **wa-focus** - Emitted when the color picker receives focus.
       * - **wa-input** - Emitted when the color picker receives input.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Methods:**
       *  - **focus(options: _FocusOptions_)** - Sets focus on the color picker.
       * - **blur()** - Removes focus from the color picker.
       * - **getFormattedValue(format: _'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva'_)** - Returns the current value as a string in the specified format.
       * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
       * 
       * ### **Slots:**
       *  - **label** - The color picker's form label. Alternatively, you can use the `label` attribute.
       * - **help-text** - The color picker's form help text. Alternatively, you can use the `helpText` attribute.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The color picker's background color. _(default: undefined)_
       * - **--border-color** - The color of the color picker's borders. _(default: undefined)_
       * - **--border-radius** - The radius of the color picker's corners. _(default: undefined)_
       * - **--border-style** - The style of the color picker's borders. _(default: undefined)_
       * - **--border-width** - The width of the color picker's borders. _(default: undefined)_
       * - **--grid-width** - The width of the color grid. _(default: undefined)_
       * - **--grid-height** - The height of the color grid. _(default: undefined)_
       * - **--grid-handle-size** - The size of the color grid's handle. _(default: undefined)_
       * - **--preview-size** - The size of the preview color. _(default: undefined)_
       * - **--preview-border-radius** - The corners of the preview color. _(default: undefined)_
       * - **--slider-height** - The height of the hue and alpha sliders. _(default: undefined)_
       * - **--slider-handle-size** - The diameter of the slider's handle. _(default: undefined)_
       * - **--spacing** - The amount of space around and between the color picker's controls. _(default: undefined)_
       * - **--swatch-border-radius** - The corners of each predefined color swatch. _(default: undefined)_
       * - **--swatch-size** - The size of each predefined color swatch. _(default: undefined)_
       * - **--trigger-border-radius** - The corners of the color picker's dropdown trigger. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **trigger** - The color picker's dropdown trigger.
       * - **swatches** - The container that holds the swatches.
       * - **swatch** - Each individual swatch.
       * - **grid** - The color grid.
       * - **grid-handle** - The color grid's handle.
       * - **slider** - Hue and opacity sliders.
       * - **slider-handle** - Hue and opacity slider handles.
       * - **hue-slider** - The hue slider.
       * - **hue-slider-handle** - The hue slider's handle.
       * - **opacity-slider** - The opacity slider.
       * - **opacity-slider-handle** - The opacity slider's handle.
       * - **preview** - The preview color.
       * - **input** - The text input.
       * - **eye-dropper-button** - The eye dropper button.
       * - **eye-dropper-button__base** - The eye dropper button's exported `button` part.
       * - **eye-dropper-button__prefix** - The eye dropper button's exported `prefix` part.
       * - **eye-dropper-button__label** - The eye dropper button's exported `label` part.
       * - **eye-dropper-button__suffix** - The eye dropper button's exported `suffix` part.
       * - **eye-dropper-button__caret** - The eye dropper button's exported `caret` part.
       * - **format-button** - The format button.
       * - **format-button__base** - The format button's exported `button` part.
       * - **format-button__prefix** - The format button's exported `prefix` part.
       * - **format-button__label** - The format button's exported `label` part.
       * - **format-button__suffix** - The format button's exported `suffix` part.
       * - **format-button__caret** - The format button's exported `caret` part.
       */
      "wa-color-picker": {
        /**
         * The default value of the form control. Primarily used for resetting the form control.
         */
        "value"?: string;
        /**
         * The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
         * display HTML, you can use the `label` slot` instead.
         */
        "label"?: string;
        /**
         * The color picker's help text. If you need to display HTML, use the `help-text` slot instead.
         */
        "help-text"?: string;
        /**
         * The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
         * picker will accept user input in any format (including CSS color names) and convert it to the desired format.
         */
        "format"?: "hex" | "rgb" | "hsl" | "hsv";
        /**
         * Determines the size of the color picker's trigger
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Removes the button that lets users toggle between format.
         */
        "no-format-toggle"?: string;
        /**
         * The name of the form control, submitted as a name/value pair with form data.
         */
        "name"?: string;
        /**
         * Disables the color picker.
         */
        "disabled"?: string;
        /**
         * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
         * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
         */
        "hoist"?: string;
        /**
         * Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.
         */
        "opacity"?: string;
        /**
         * By default, values are lowercase. With this attribute, values will be uppercase instead.
         */
        "uppercase"?: string;
        /**
         * One or more predefined color swatches to display as presets in the color picker. Can include any format the color
         * picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
         * semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.
         */
        "swatches"?: "string[]";
        /**
         * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
         * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
         * the same document or shadow root for this to work.
         */
        "form"?: string;
        /**
         * Makes the color picker a required field.
         */
        "required"?: string;
        "children"?: any;
      };
      /**
       * Copies text data to the clipboard when the user clicks the trigger.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-copy** - Emitted when the data has been copied.
       * - **wa-error** - Emitted when the data could not be copied.
       * 
       * ### **Slots:**
       *  - **copy-icon** - The icon to show in the default copy state. Works best with `<wa-icon>`.
       * - **success-icon** - The icon to show when the content is copied. Works best with `<wa-icon>`.
       * - **error-icon** - The icon to show when a copy error occurs. Works best with `<wa-icon>`.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The color of the button's background. _(default: undefined)_
       * - **--background-color-hover** - The color of the button's background on hover. _(default: undefined)_
       * - **--success-color** - The color to use for success feedback. _(default: undefined)_
       * - **--error-color** - The color to use for error feedback. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **button** - The internal `<button>` element.
       * - **copy-icon** - The container that holds the copy icon.
       * - **success-icon** - The container that holds the success icon.
       * - **error-icon** - The container that holds the error icon.
       * - **tooltip__base** - The tooltip's exported `base` part.
       * - **tooltip__base__popup** - The tooltip's exported `popup` part.
       * - **tooltip__base__arrow** - The tooltip's exported `arrow` part.
       * - **tooltip__body** - The tooltip's exported `body` part.
       */
      "wa-copy-button": {
        /**
         * The text value to copy.
         */
        "value"?: string;
        /**
         * An id that references an element in the same document from which data will be copied. If both this and `value` are
         * present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
         * attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
         * append a dot and the property name, e.g. `from="el.value"`.
         */
        "from"?: string;
        /**
         * Disables the copy button.
         */
        "disabled"?: string;
        /**
         * A custom label to show in the tooltip.
         */
        "copy-label"?: string;
        /**
         * A custom label to show in the tooltip after copying.
         */
        "success-label"?: string;
        /**
         * A custom label to show in the tooltip when a copy error occurs.
         */
        "error-label"?: string;
        /**
         * The length of time to show feedback before restoring the default trigger.
         */
        "feedback-duration"?: string;
        /**
         * The preferred placement of the tooltip.
         */
        "tooltip-placement"?: "top" | "right" | "bottom" | "left";
        /**
         * Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
         * `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
         * scenarios.
         */
        "hoist"?: string;
        "children"?: any;
      };
      /**
       * Details show a brief summary and expand to show additional content.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-show** - Emitted when the details opens.
       * - **wa-after-show** - Emitted after the details opens and all animations are complete.
       * - **wa-hide** - Emitted when the details closes.
       * - **wa-after-hide** - Emitted after the details closes and all animations are complete.
       * 
       * ### **Methods:**
       *  - **show()** - Shows the details.
       * - **hide()** - Hides the details
       * 
       * ### **Slots:**
       *  - _default_ - The details' main content.
       * - **summary** - The details' summary. Alternatively, you can use the `summary` attribute.
       * - **expand-icon** - Optional expand icon to use instead of the default. Works best with `<wa-icon>`.
       * - **collapse-icon** - Optional collapse icon to use instead of the default. Works best with `<wa-icon>`.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The details' background color. _(default: undefined)_
       * - **--border-color** - The details' border color. _(default: undefined)_
       * - **--border-radius** - The radius for the details' corners. Expects a single value. _(default: undefined)_
       * - **--border-style** - The style of the details' borders. _(default: undefined)_
       * - **--border-width** - The width of the details' borders. Expects a single value. _(default: undefined)_
       * - **--icon-color** - The color of the details' icon. _(default: undefined)_
       * - **--spacing** - The amount of space around and between the details' content. Expects a single value. _(default: undefined)_
       * - **--show-duration** - The show duration to use when applying built-in animation classes. _(default: 200ms)_
       * - **--hide-duration** - The hide duration to use when applying built-in animation classes. _(default: 200ms)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **header** - The header that wraps both the summary and the expand/collapse icon.
       * - **summary** - The container that wraps the summary.
       * - **summary-icon** - The container that wraps the expand/collapse icons.
       * - **content** - The details content.
       */
      "wa-details": {
        /**
         * Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
         * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
         */
        "open"?: string;
        /**
         * The summary to show in the header. If you need to display HTML, use the `summary` slot instead.
         */
        "summary"?: string;
        /**
         * Disables the details so it can't be toggled.
         */
        "disabled"?: string;
        "children"?: any;
      };
      /**
       * Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-show** - Emitted when the dialog opens.
       * - **wa-after-show** - Emitted after the dialog opens and all animations are complete.
       * - **wa-hide** - Emitted when the dialog is requested to close. Calling `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
       * - **wa-after-hide** - Emitted after the dialog closes and all animations are complete.
       * 
       * ### **Slots:**
       *  - _default_ - The dialog's main content.
       * - **label** - The dialog's label. Alternatively, you can use the `label` attribute.
       * - **header-actions** - Optional actions to add to the header. Works best with `<wa-icon-button>`.
       * - **footer** - The dialog's footer, usually one or more buttons representing various options.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The dialog's background color. _(default: undefined)_
       * - **--border-radius** - The radius of the dialog's corners. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the dialog. _(default: undefined)_
       * - **--spacing** - The amount of space around and between the dialog's content. _(default: undefined)_
       * - **--width** - The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. _(default: undefined)_
       * - **--show-duration** - The animation duration when showing the dialog. _(default: 200ms)_
       * - **--hide-duration** - The animation duration when hiding the dialog. _(default: 200ms)_
       * 
       * ### **CSS Parts:**
       *  - **header** - The dialog's header. This element wraps the title and header actions.
       * - **header-actions** - Optional actions to add to the header. Works best with `<wa-icon-button>`.
       * - **title** - The dialog's title.
       * - **close-button** - The close button, a `<wa-icon-button>`.
       * - **close-button__base** - The close button's exported `base` part.
       * - **body** - The dialog's body.
       * - **footer** - The dialog's footer.
       */
      "wa-dialog": {
        /**
         * Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
         * use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.
         */
        "open"?: string;
        /**
         * The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
         * proper accessibility. If you need to display HTML, use the `label` slot instead.
         */
        "label"?: string;
        /**
         * Renders the dialog with a header.
         */
        "with-header"?: string;
        /**
         * Renders the dialog with a footer.
         */
        "with-footer"?: string;
        /**
         * When enabled, the dialog will be closed when the user clicks outside of it.
         */
        "light-dismiss"?: string;
        "children"?: any;
      };
      /**
       * Dividers are used to visually separate or group elements.
       * ---
       * 
       * 
       * ### **CSS Properties:**
       *  - **--color** - The color of the divider. _(default: undefined)_
       * - **--width** - The width of the divider. _(default: undefined)_
       * - **--spacing** - The spacing of the divider. _(default: undefined)_
       */
      "wa-divider": {
        /**
         * Draws the divider in a vertical orientation.
         */
        "vertical"?: string;
        "children"?: any;
      };
      /**
       * Drawers slide in from a container to expose additional options and information.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-show** - Emitted when the drawer opens.
       * - **wa-after-show** - Emitted after the drawer opens and all animations are complete.
       * - **wa-hide** - Emitted when the drawer is requesting to close. Calling `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
       * - **wa-after-hide** - Emitted after the drawer closes and all animations are complete.
       * 
       * ### **Slots:**
       *  - _default_ - The drawer's main content.
       * - **label** - The drawer's label. Alternatively, you can use the `label` attribute.
       * - **header-actions** - Optional actions to add to the header. Works best with `<wa-icon-button>`.
       * - **footer** - The drawer's footer, usually one or more buttons representing various options.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The drawer's background color. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the drawer. _(default: undefined)_
       * - **--spacing** - The amount of space around and between the drawer's content. _(default: undefined)_
       * - **--size** - The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. _(default: undefined)_
       * - **--show-duration** - The animation duration when showing the drawer. _(default: 200ms)_
       * - **--hide-duration** - The animation duration when hiding the drawer. _(default: 200ms)_
       * 
       * ### **CSS Parts:**
       *  - **header** - The drawer's header. This element wraps the title and header actions.
       * - **header-actions** - Optional actions to add to the header. Works best with `<wa-icon-button>`.
       * - **title** - The drawer's title.
       * - **close-button** - The close button, a `<wa-icon-button>`.
       * - **close-button__base** - The close button's exported `base` part.
       * - **body** - The drawer's body.
       * - **footer** - The drawer's footer.
       */
      "wa-drawer": {
        /**
         * Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
         * use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.
         */
        "open"?: string;
        /**
         * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
         * proper accessibility. If you need to display HTML, use the `label` slot instead.
         */
        "label"?: string;
        /**
         * The direction from which the drawer will open.
         */
        "placement"?: "top" | "end" | "bottom" | "start";
        /**
         * Renders the drawer with a header.
         */
        "with-header"?: string;
        /**
         * Renders the drawer with a footer.
         */
        "with-footer"?: string;
        /**
         * When enabled, the drawer will be closed when the user clicks outside of it.
         */
        "light-dismiss"?: string;
        "children"?: any;
      };
      /**
       * Dropdowns expose additional content that "drops down" in a panel.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-show** - Emitted when the dropdown opens.
       * - **wa-after-show** - Emitted after the dropdown opens and all animations are complete.
       * - **wa-hide** - Emitted when the dropdown closes.
       * - **wa-after-hide** - Emitted after the dropdown closes and all animations are complete.
       * 
       * ### **Methods:**
       *  - **show()** - Shows the dropdown panel.
       * - **hide()** - Hides the dropdown panel
       * - **reposition()** - Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
       * is activated.
       * 
       * ### **Slots:**
       *  - _default_ - The dropdown's main content.
       * - **trigger** - The dropdown's trigger, usually a `<wa-button>` element.
       * 
       * ### **CSS Properties:**
       *  - **--box-shadow** - The shadow effects around the dropdown's edges. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **trigger** - The container that wraps the trigger.
       * - **panel** - The panel that gets shown when the dropdown is open.
       */
      "wa-dropdown": {
        /**
         * Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
         * can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.
         */
        "open"?: string;
        /**
         * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
         * inside of the viewport.
         */
        "placement"?: "" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";
        /**
         * Disables the dropdown so the panel will not open.
         */
        "disabled"?: string;
        /**
         * By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
         * dropdowns that allow for multiple interactions.
         */
        "stay-open-on-select"?: string;
        /**
         * The distance in pixels from which to offset the panel away from its trigger.
         */
        "distance"?: string;
        /**
         * The distance in pixels from which to offset the panel along its trigger.
         */
        "skidding"?: string;
        /**
         * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
         * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
         */
        "hoist"?: string;
        /**
         * Syncs the popup width or height to that of the trigger element.
         */
        "sync"?: "width" | "height" | "both";
        "children"?: any;
      };
      /**
       * Formats a number as a human readable bytes value.
       * ---
       * 
       */
      "wa-format-bytes": {
        /**
         * The number to format in bytes.
         */
        "value"?: string;
        /**
         * The type of unit to display.
         */
        "unit"?: "byte" | "bit";
        /**
         * Determines how to display the result, e.g. "100 bytes", "100 b", or "100b".
         */
        "display"?: "long" | "short" | "narrow";
        "children"?: any;
      };
      /**
       * Formats a date/time using the specified locale and options.
       * ---
       * 
       */
      "wa-format-date": {
        /**
         * The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
         * recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
         * in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
         */
        "date"?: "Date";
        /**
         * The format for displaying the weekday.
         */
        "weekday"?: "narrow" | "short" | "long";
        /**
         * The format for displaying the era.
         */
        "era"?: "narrow" | "short" | "long";
        /**
         * The format for displaying the year.
         */
        "year"?: "numeric" | "2-digit";
        /**
         * The format for displaying the month.
         */
        "month"?: "numeric" | "2-digit" | "narrow" | "short" | "long";
        /**
         * The format for displaying the day.
         */
        "day"?: "numeric" | "2-digit";
        /**
         * The format for displaying the hour.
         */
        "hour"?: "numeric" | "2-digit";
        /**
         * The format for displaying the minute.
         */
        "minute"?: "numeric" | "2-digit";
        /**
         * The format for displaying the second.
         */
        "second"?: "numeric" | "2-digit";
        /**
         * The format for displaying the time.
         */
        "time-zone-name"?: "short" | "long";
        /**
         * The time zone to express the time in.
         */
        "time-zone"?: string;
        /**
         * The format for displaying the hour.
         */
        "hour-format"?: "auto" | "12" | "24";
        "children"?: any;
      };
      /**
       * Formats a number using the specified locale and options.
       * ---
       * 
       */
      "wa-format-number": {
        /**
         * The number to format.
         */
        "value"?: string;
        /**
         * The formatting style to use.
         */
        "type"?: "currency" | "decimal" | "percent";
        /**
         * Turns off grouping separators.
         */
        "no-grouping"?: string;
        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.
         */
        "currency"?: string;
        /**
         * How to display the currency.
         */
        "currency-display"?: "symbol" | "narrowSymbol" | "code" | "name";
        /**
         * The minimum number of integer digits to use. Possible values are 1-21.
         */
        "minimum-integer-digits"?: string;
        /**
         * The minimum number of fraction digits to use. Possible values are 0-20.
         */
        "minimum-fraction-digits"?: string;
        /**
         * The maximum number of fraction digits to use. Possible values are 0-0.
         */
        "maximum-fraction-digits"?: string;
        /**
         * The minimum number of significant digits to use. Possible values are 1-21.
         */
        "minimum-significant-digits"?: string;
        /**
         * The maximum number of significant digits to use,. Possible values are 1-21.
         */
        "maximum-significant-digits"?: string;
        "children"?: any;
      };
      /**
       * Icons are symbols that can be used to represent various options within an application.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-load** - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
       * - **wa-error** - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
       * 
       * ### **CSS Properties:**
       *  - **--primary-color** - Sets a duotone icon's primary color. _(default: currentColor)_
       * - **--primary-opacity** - Sets a duotone icon's primary opacity. _(default: 1)_
       * - **--secondary-color** - Sets a duotone icon's secondary color. _(default: currentColor)_
       * - **--secondary-opacity** - Sets a duotone icon's secondary opacity. _(default: 0.4)_
       * 
       * ### **CSS Parts:**
       *  - **svg** - The internal SVG element.
       * - **use** - The `<use>` element generated when using `spriteSheet: true`
       */
      "wa-icon": {
        /**
         * The name of the icon to draw. Available names depend on the icon library being used.
         */
        "name"?: string;
        /**
         * The family of icons to choose from. For Font Awesome Free (default), valid options include `classic` and `brands`.
         * For Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, and `brands`. Custom icon
         * libraries may or may not use this property.
         */
        "family"?: string;
        /**
         * The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
         * the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
         * may or may not use this property.
         */
        "variant"?: string;
        /**
         * Draws the icon in a fixed-width both.
         */
        "fixed-width"?: "false";
        /**
         * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
         * can result in XSS attacks.
         */
        "src"?: string;
        /**
         * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
         * ignored by assistive devices.
         */
        "label"?: string;
        /**
         * The name of a registered custom icon library.
         */
        "library"?: string;
        "children"?: any;
      };
      /**
       * Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the icon button loses focus.
       * - **wa-focus** - Emitted when the icon button gains focus.
       * 
       * ### **Methods:**
       *  - **click()** - Simulates a click on the icon button.
       * - **focus(options: _FocusOptions_)** - Sets focus on the icon button.
       * - **blur()** - Removes focus from the icon button.
       * 
       * ### **CSS Properties:**
       *  - **--background-color-hover** - The color of the button's background on hover. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-icon-button": {
        /**
         * The name of the icon to draw. Available names depend on the icon library being used.
         */
        "name"?: string;
        /**
         * The family of icons to choose from. For Font Awesome, valid options include `classic`, `sharp`, `duotone`, and
         * `brands`. Custom icon libraries may or may not use this property.
         */
        "family"?: string;
        /**
         * The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
         * the _classic_ and _sharp_ families. Custom icon libraries may or may not use this property.
         */
        "variant"?: string;
        /**
         * The name of a registered custom icon library.
         */
        "library"?: string;
        /**
         * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
         * can result in XSS attacks.
         */
        "src"?: string;
        /**
         * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
         */
        "href"?: string;
        /**
         * Tells the browser where to open the link. Only used when `href` is set.
         */
        "target"?: "_blank" | "_parent" | "_self" | "_top";
        /**
         * Tells the browser to download the linked file as this filename. Only used when `href` is set.
         */
        "download"?: string;
        /**
         * A description that gets read by assistive devices. For optimal accessibility, you should always include a label
         * that describes what the icon button does.
         */
        "label"?: string;
        /**
         * Disables the button.
         */
        "disabled"?: string;
        "children"?: any;
      };
      /**
       * Compare visual differences between similar photos with a sliding panel.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-change** - Emitted when the position changes.
       * 
       * ### **Slots:**
       *  - **before** - The before image, an `<img>` or `<svg>` element.
       * - **after** - The after image, an `<img>` or `<svg>` element.
       * - **handle** - The icon used inside the handle.
       * 
       * ### **CSS Properties:**
       *  - **--divider-color** - The color of the divider. _(default: undefined)_
       * - **--divider-width** - The width of the dividing line. _(default: undefined)_
       * - **--handle-color** - The color of the icon used inside the handle. _(default: undefined)_
       * - **--handle-size** - The size of the compare handle. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **before** - The container that wraps the before image.
       * - **after** - The container that wraps the after image.
       * - **divider** - The divider that separates the images.
       * - **handle** - The handle that the user drags to expose the after image.
       */
      "wa-image-comparer": {
        /**
         * The position of the divider as a percentage.
         */
        "position"?: string;
        "children"?: any;
      };
      /**
       * Includes give you the power to embed external HTML files into the page.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-load** - Emitted when the included file is loaded.
       * - **wa-error** - Emitted when the included file fails to load due to an error.
       */
      "wa-include": {
        /**
         * The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
         * code and can result in XSS attacks.
         */
        "src"?: string;
        /**
         * The fetch mode to use.
         */
        "mode"?: "cors" | "no-cors" | "same-origin";
        /**
         * Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
         * code and can result in XSS attacks.
         */
        "allow-scripts"?: string;
        "children"?: any;
      };
      /**
       * Inputs collect data from the user.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the control loses focus.
       * - **wa-change** - Emitted when an alteration to the control's value is committed by the user.
       * - **wa-clear** - Emitted when the clear button is activated.
       * - **wa-focus** - Emitted when the control gains focus.
       * - **wa-input** - Emitted when the control receives input.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Methods:**
       *  - **focus(options: _FocusOptions_)** - Sets focus on the input.
       * - **blur()** - Removes focus from the input.
       * - **select()** - Selects all the text in the input.
       * - **setSelectionRange(selectionStart: _number_, selectionEnd: _number_, selectionDirection: _'forward' | 'backward' | 'none'_)** - Sets the start and end positions of the text selection (0-based).
       * - **setRangeText(replacement: _string_, start: _number_, end: _number_, selectMode: _'select' | 'start' | 'end' | 'preserve'_)** - Replaces a range of text with a new string.
       * - **showPicker()** - Displays the browser picker for an input element (only works if the browser supports it for the input type).
       * - **stepUp()** - Increments the value of a numeric input type by the value of the step attribute.
       * - **stepDown()** - Decrements the value of a numeric input type by the value of the step attribute.
       * 
       * ### **Slots:**
       *  - **label** - The input's label. Alternatively, you can use the `label` attribute.
       * - **prefix** - Used to prepend a presentational icon or similar element to the input.
       * - **suffix** - Used to append a presentational icon or similar element to the input.
       * - **clear-icon** - An icon to use in lieu of the default clear icon.
       * - **show-password-icon** - An icon to use in lieu of the default show password icon.
       * - **hide-password-icon** - An icon to use in lieu of the default hide password icon.
       * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The input's background color. _(default: undefined)_
       * - **--border-color** - The color of the input's borders. _(default: undefined)_
       * - **--border-radius** - The radius of the input's corners. _(default: undefined)_
       * - **--border-style** - The style of the input's borders. _(default: undefined)_
       * - **--border-width** - The width of the input's borders. Expects a single value. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the input. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **form-control** - The form control that wraps the label, input, and help text.
       * - **form-control-label** - The label's wrapper.
       * - **form-control-input** - The input's wrapper.
       * - **form-control-help-text** - The help text's wrapper.
       * - **base** - The component's base wrapper.
       * - **input** - The internal `<input>` control.
       * - **prefix** - The container that wraps the prefix.
       * - **clear-button** - The clear button.
       * - **password-toggle-button** - The password toggle button.
       * - **suffix** - The container that wraps the suffix.
       */
      "wa-input": {
        "title"?: string;
        /**
         * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
         * to `text`.
         */
        "type"?: "" | "date" | "datetime-local" | "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "url";
        /**
         * The name of the input, submitted as a name/value pair with form data.
         */
        "name"?: string;
        /**
         * The default value of the form control. Primarily used for resetting the form control.
         */
        "value"?: string;
        /**
         * The input's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Draws a filled input.
         */
        "filled"?: string;
        /**
         * Draws a pill-style input with rounded edges.
         */
        "pill"?: string;
        /**
         * The input's label. If you need to display HTML, use the `label` slot instead.
         */
        "label"?: string;
        /**
         * The input's help text. If you need to display HTML, use the `help-text` slot instead.
         */
        "help-text"?: string;
        /**
         * Adds a clear button when the input is not empty.
         */
        "clearable"?: string;
        /**
         * Disables the input.
         */
        "disabled"?: string;
        /**
         * Placeholder text to show as a hint when the input is empty.
         */
        "placeholder"?: string;
        /**
         * Makes the input readonly.
         */
        "readonly"?: string;
        /**
         * Adds a button to toggle the password's visibility. Only applies to password types.
         */
        "password-toggle"?: string;
        /**
         * Determines whether or not the password is currently visible. Only applies to password input types.
         */
        "password-visible"?: string;
        /**
         * Hides the browser's built-in increment/decrement spin buttons for number inputs.
         */
        "no-spin-buttons"?: string;
        /**
         * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
         * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
         * the same document or shadow root for this to work.
         */
        "form"?: string;
        /**
         * Makes the input a required field.
         */
        "required"?: string;
        /**
         * A regular expression pattern to validate input against.
         */
        "pattern"?: string;
        /**
         * The minimum length of input that will be considered valid.
         */
        "minlength"?: string;
        /**
         * The maximum length of input that will be considered valid.
         */
        "maxlength"?: string;
        /**
         * The input's minimum value. Only applies to date and number input types.
         */
        "min"?: string;
        /**
         * The input's maximum value. Only applies to date and number input types.
         */
        "max"?: string;
        /**
         * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
         * implied, allowing any numeric value. Only applies to date and number input types.
         */
        "step"?: "any";
        /**
         * Controls whether and how text input is automatically capitalized as it is entered by the user.
         */
        "autocapitalize"?: "off" | "none" | "on" | "sentences" | "words" | "characters";
        /**
         * Indicates whether the browser's autocorrect feature is on or off.
         */
        "autocorrect"?: "off" | "on";
        /**
         * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
         * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
         */
        "autocomplete"?: string;
        /**
         * Indicates that the input should receive focus on page load.
         */
        "autofocus"?: string;
        /**
         * Used to customize the label or icon of the Enter key on virtual keyboards.
         */
        "enterkeyhint"?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
        /**
         * Enables spell checking on the input.
         */
        "spellcheck"?: string;
        /**
         * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
         * keyboard on supportive devices.
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        "children"?: any;
      };
      /**
       * Menus provide a list of options for the user to choose from.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-select** - Emitted when a menu item is selected.
       * 
       * ### **Slots:**
       *  - _default_ - The menu's content, including menu items, menu labels, and dividers.
       */
      "wa-menu": {
        "children"?: any;
      };
      /**
       * Menu items provide options for the user to pick from in a menu.
       * ---
       * 
       * 
       * ### **Methods:**
       *  - **getTextLabel()** - Returns a text label based on the contents of the menu item's default slot.
       * 
       * ### **Slots:**
       *  - _default_ - The menu item's label.
       * - **prefix** - Used to prepend an icon or similar element to the menu item.
       * - **suffix** - Used to append an icon or similar element to the menu item.
       * - **submenu** - Used to denote a nested menu.
       * 
       * ### **CSS Properties:**
       *  - **--background-color-hover** - The menu item's background color on hover. _(default: undefined)_
       * - **--label-color-hover** - The label color on hover. _(default: undefined)_
       * - **--submenu-offset** - The distance submenus shift to overlap the parent menu. _(default: -2px)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **checked-icon** - The checked icon, which is only visible when the menu item is checked.
       * - **prefix** - The prefix container.
       * - **label** - The menu item label.
       * - **suffix** - The suffix container.
       * - **spinner** - The spinner that shows when the menu item is in the loading state.
       * - **spinner__base** - The spinner's base part.
       * - **submenu-icon** - The submenu icon, visible only when the menu item has a submenu (not yet implemented).
       */
      "wa-menu-item": {
        /**
         * The type of menu item to render. To use `checked`, this value must be set to `checkbox`.
         */
        "type"?: "normal" | "checkbox";
        /**
         * Draws the item in a checked state.
         */
        "checked"?: string;
        /**
         * A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
         */
        "value"?: string;
        /**
         * Draws the menu item in a loading state.
         */
        "loading"?: string;
        /**
         * Draws the menu item in a disabled state, preventing selection.
         */
        "disabled"?: string;
        "children"?: any;
      };
      /**
       * Menu labels are used to describe a group of menu items.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The menu label's content.
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-menu-label": {
        "children"?: any;
      };
      /**
       * The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
       * ---
       * 
       * 
       * ### **Events:**
       *  - **wa-mutation** - Emitted when a mutation occurs.
       * 
       * ### **Slots:**
       *  - _default_ - The content to watch for mutations.
       */
      "wa-mutation-observer": {
        /**
         * Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
         * `attr="class id title"`. To watch all attributes, use `*`.
         */
        "attr"?: string;
        /**
         * Indicates whether or not the attribute's previous value should be recorded when monitoring changes.
         */
        "attr-old-value"?: string;
        /**
         * Watches for changes to the character data contained within the node.
         */
        "char-data"?: string;
        /**
         * Indicates whether or not the previous value of the node's text should be recorded.
         */
        "char-data-old-value"?: string;
        /**
         * Watches for the addition or removal of new child nodes.
         */
        "child-list"?: string;
        /**
         * Disables the observer.
         */
        "disabled"?: string;
        "children"?: any;
      };
      /**
       * Options define the selectable items within various form controls such as [select](/docs/components/select).
       * ---
       * 
       * 
       * ### **Methods:**
       *  - **getTextLabel()** - Returns a plain text label based on the option's content.
       * 
       * ### **Slots:**
       *  - _default_ - The option's label.
       * - **prefix** - Used to prepend an icon or similar element to the menu item.
       * - **suffix** - Used to append an icon or similar element to the menu item.
       * 
       * ### **CSS Properties:**
       *  - **--background-color-current** - The current option's background color. _(default: undefined)_
       * - **--background-color-hover** - The options's background color on hover. _(default: undefined)_
       * - **--label-color-current** - The current option's label color. _(default: undefined)_
       * - **--label-color-hover** - The label color on hover. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **checked-icon** - The checked icon, a `<wa-icon>` element.
       * - **base** - The component's base wrapper.
       * - **label** - The option's label.
       * - **prefix** - The container that wraps the prefix.
       * - **suffix** - The container that wraps the suffix.
       */
      "wa-option": {
        /**
         * The option's value. When selected, the containing form control will receive this value. The value must be unique
         * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
         * multiple values.
         */
        "value"?: string;
        /**
         * Draws the option in a disabled state, preventing selection.
         */
        "disabled"?: string;
        "children"?: any;
      };
      /**
       * Pages offer an easy way to scaffold pages using minimal markup.
       * ---
       * 
       * 
       * ### **Methods:**
       *  - **showNavigation()** - Shows the mobile navigation drawer
       * - **hideNavigation()** - Hides the mobile navigation drawer
       * - **toggleNavigation()** - Toggles the mobile navigation drawer
       * 
       * ### **Slots:**
       *  - _default_ - The page's main content.
       * - **banner** - The banner that gets display above the header. The banner will not be shown if no content is provided.
       * - **header** - The header to display at the top of the page. If a banner is present, the header will appear below the banner. The header will not be shown if there is no content.
       * - **subheader** - A subheader to display below the `header`. This is a good place to put things like breadcrumbs.
       * - **menu** - The left side of the page. If you slot an element in here, you will override the default "navigation" slot and will be handling navigation on your own. This also will not disable the fallback behavior of the navigation button. This section "sticks" to the top as the page scrolls.
       * - **navigation-header** - The header for a navigation area. On mobile this will be the header for `<wa-drawer>`.
       * - **navigation** - The main content to display in the navigation area.
       * - **navigation-footer** - The footer for a navigation area. On mobile this will be the footer for `<wa-drawer>`.
       * - **main-header** - Header to display inline above the main content.
       * - **main-footer** - Footer to display inline below the main content.
       * - **aside** - Content to be shown on the right side of the page. Typically contains a table of contents, ads, etc. This section "sticks" to the top as the page scrolls.
       * - **skip-to-content** - The "skip to content" slot. You can override this If you would like to override the `Skip to content` button and add additional "Skip to X", they can be inserted here.
       * - **footer** - The content to display in the footer. This is always displayed underneath the viewport so will always make the page "scrollable".
       * 
       * ### **CSS Properties:**
       *  - **--menu-width** - The width of the page's "menu" section. _(default: auto)_
       * - **--main-width** - The width of the page's "main" section. _(default: 1fr)_
       * - **--aside-width** - The wide of the page's "aside" section. _(default: auto)_
       * - **--banner-height** - The height of the banner. This gets calculated when the page initializes. If the height is known, you can set it here to prevent shifting when the page loads. _(default: 0px)_
       * - **--header-height** - The height of the header. This gets calculated when the page initializes. If the height is known, you can set it here to prevent shifting when the page loads. _(default: 0px)_
       * - **--subheader-height** - The height of the subheader. This gets calculated when the page initializes. If the height is known, you can set it here to prevent shifting when the page loads. _(default: 0px)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **banner** - The banner to show above header.
       * - **header** - The header, usually for top level navigation / branding.
       * - **subheader** - Shown below the header, usually intended for things like breadcrumbs and other page level navigation.
       * - **body** - The wrapper around menu, main, and aside.
       * - **menu** - The left hand side of the page. Generally intended for navigation.
       * - **navigation-header** - The header for a navigation area. On mobile this will be the header for `<wa-drawer>`.
       * - **navigation-footer** - The footer for a navigation area. On mobile this will be the footer for `<wa-drawer>`.
       * - **main-header** - The header above main content.
       * - **main-content** - The main content.
       * - **main-footer** - The footer below main content.
       * - **aside** - The right hand side of the page. Used for things like table of contents, ads, etc.
       * - **skip-links** - Wrapper around skip-link
       * - **skip-link** - The "skip to main content" link
       * - **footer** - The footer of the page. This is always below the initial viewport size.
       * - **dialog-wrapper** - A wrapper around elements such as dialogs or other modal-like elements.
       */
      "wa-page": {
        /**
         * The view is a reflection of the "mobileBreakpoint", when the page is larger than the `mobile-breakpoint` (768 by
         * default), it is considered to be a "desktop" view. The view is merely a way to distinguish when to show/hide the
         * navigation. You can use additional media queries to make other adjustments to content as necessary.
         */
        "view"?: "mobile" | "desktop";
        /**
         * Whether or not the navigation drawer is open. Note, the navigation drawer is only "open" on mobile views.
         */
        "nav-open"?: string;
        /**
         * At what "px" to hide the "menu" slot and collapse into a hamburger button
         */
        "mobile-breakpoint"?: string;
        /**
         * Where to place the navigation when in the mobile viewport.
         */
        "navigation-placement"?: "start" | "end";
        "children"?: any;
      };
      /**
       * Popup is a utility that lets you declaratively anchor "popup" containers to another element.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-reposition** - Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.
       * 
       * ### **Methods:**
       *  - **reposition()** - Forces the popup to recalculate and reposition itself.
       * 
       * ### **Slots:**
       *  - _default_ - The popup's content.
       * - **anchor** - The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.
       * 
       * ### **CSS Properties:**
       *  - **--arrow-size** - The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used. _(default: 6px)_
       * - **--arrow-color** - The color of the arrow. _(default: black)_
       * - **--auto-size-available-width** - A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. _(default: undefined)_
       * - **--auto-size-available-height** - A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. _(default: undefined)_
       * - **--show-duration** - The show duration to use when applying built-in animation classes. _(default: 100ms)_
       * - **--hide-duration** - The hide duration to use when applying built-in animation classes. _(default: 100ms)_
       * 
       * ### **CSS Parts:**
       *  - **arrow** - The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.
       * - **popup** - The popup's container. Useful for setting a background color, box shadow, etc.
       * - **hover-bridge** - The hover bridge element. Only available when the `hover-bridge` option is enabled.
       */
      "wa-popup": {
        /**
         * The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
         * element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
         * `anchor` slot instead.
         */
        "anchor"?: "Element" | "VirtualElement";
        /**
         * Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
         * down and the popup will be hidden.
         */
        "active"?: string;
        /**
         * The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
         * panel inside of the viewport.
         */
        "placement"?: "" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";
        /**
         * Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is
         * clipped, using a `fixed` position strategy can often workaround it.
         */
        "strategy"?: "absolute" | "fixed";
        /**
         * The distance in pixels from which to offset the panel away from its anchor.
         */
        "distance"?: string;
        /**
         * The distance in pixels from which to offset the panel along its anchor.
         */
        "skidding"?: string;
        /**
         * Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
         * `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
         * `::part(arrow)` in your stylesheet.
         */
        "arrow"?: string;
        /**
         * The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
         * anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
         * align the arrow to the start, end, or center of the popover instead.
         */
        "arrow-placement"?: "start" | "end" | "center" | "anchor";
        /**
         * The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
         * this will prevent it from overflowing the corners.
         */
        "arrow-padding"?: string;
        /**
         * When set, placement of the popup will flip to the opposite site to keep it in view. You can use
         * `flipFallbackPlacements` to further configure how the fallback placement is determined.
         */
        "flip"?: string;
        /**
         * If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
         * string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
         * fallback strategy will be used instead.
         */
        "flip-fallback-placements"?: string;
        /**
         * When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
         * the popup should be positioned using the best available fit based on available space or as it was initially
         * preferred.
         */
        "flip-fallback-strategy"?: "best-fit" | "initial";
        /**
         * The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
         * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
         * change the boundary by passing a reference to one or more elements to this property.
         */
        "flipBoundary"?: "Element" | "Element[]";
        /**
         * The amount of padding, in pixels, to exceed before the flip behavior will occur.
         */
        "flip-padding"?: string;
        /**
         * Moves the popup along the axis to keep it in view when clipped.
         */
        "shift"?: string;
        /**
         * The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
         * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
         * change the boundary by passing a reference to one or more elements to this property.
         */
        "shiftBoundary"?: "Element" | "Element[]";
        /**
         * The amount of padding, in pixels, to exceed before the shift behavior will occur.
         */
        "shift-padding"?: string;
        /**
         * When set, this will cause the popup to automatically resize itself to prevent it from overflowing.
         */
        "auto-size"?: "horizontal" | "vertical" | "both";
        /**
         * Syncs the popup's width or height to that of the anchor element.
         */
        "sync"?: "width" | "height" | "both";
        /**
         * The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
         * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
         * change the boundary by passing a reference to one or more elements to this property.
         */
        "autoSizeBoundary"?: "Element" | "Element[]";
        /**
         * The amount of padding, in pixels, to exceed before the auto-size behavior will occur.
         */
        "auto-size-padding"?: string;
        /**
         * When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
         * gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
         * because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
         * active.
         */
        "hover-bridge"?: string;
        "children"?: any;
      };
      /**
       * Progress bars are used to show the status of an ongoing operation.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - A label to show inside the progress indicator.
       * 
       * ### **CSS Properties:**
       *  - **--height** - The progress bar's height. _(default: undefined)_
       * - **--track-color** - The color of the track. _(default: undefined)_
       * - **--indicator-color** - The color of the indicator. _(default: undefined)_
       * - **--label-color** - The color of the label. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the progress bar. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **indicator** - The progress bar's indicator.
       * - **label** - The progress bar's label.
       */
      "wa-progress-bar": {
        /**
         * The current progress as a percentage, 0 to 100.
         */
        "value"?: string;
        /**
         * When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.
         */
        "indeterminate"?: string;
        /**
         * A custom label for assistive devices.
         */
        "label"?: string;
        "children"?: any;
      };
      /**
       * Progress rings are used to show the progress of a determinate operation in a circular fashion.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - A label to show inside the ring.
       * 
       * ### **CSS Properties:**
       *  - **--size** - The diameter of the progress ring (cannot be a percentage). _(default: undefined)_
       * - **--track-width** - The width of the track. _(default: undefined)_
       * - **--track-color** - The color of the track. _(default: undefined)_
       * - **--indicator-width** - The width of the indicator. Defaults to the track width. _(default: undefined)_
       * - **--indicator-color** - The color of the indicator. _(default: undefined)_
       * - **--indicator-transition-duration** - The duration of the indicator's transition when the value changes. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **label** - The progress ring label.
       */
      "wa-progress-ring": {
        /**
         * The current progress as a percentage, 0 to 100.
         */
        "value"?: string;
        /**
         * A custom label for assistive devices.
         */
        "label"?: string;
        "children"?: any;
      };
      /**
       * Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
       * ---
       * 
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-qr-code": {
        /**
         * The QR code's value.
         */
        "value"?: string;
        /**
         * The label for assistive devices to announce. If unspecified, the value will be used instead.
         */
        "label"?: string;
        /**
         * The size of the QR code, in pixels.
         */
        "size"?: string;
        /**
         * The fill color. This can be any valid CSS color, but not a CSS custom property.
         */
        "fill"?: string;
        /**
         * The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property.
         */
        "background"?: string;
        /**
         * The edge radius of each module. Must be between 0 and 0.5.
         */
        "radius"?: string;
        /**
         * The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html)
         */
        "error-correction"?: "L" | "M" | "Q" | "H";
        "children"?: any;
      };
      /**
       * Radios allow the user to select a single option from a group.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **wa-blur** - Emitted when the control loses focus.
       * - **wa-focus** - Emitted when the control gains focus.
       * 
       * ### **Slots:**
       *  - _default_ - The radio's label.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The radio's background color. _(default: undefined)_
       * - **--background-color-checked** - The radio's background color when checked. _(default: undefined)_
       * - **--border-color** - The color of the radio's borders. _(default: undefined)_
       * - **--border-color-checked** - The color of the radio's borders when checked. _(default: undefined)_
       * - **--border-style** - The style of the radio's borders. _(default: undefined)_
       * - **--border-width** - The width of the radio's borders. Expects a single value. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the radio. _(default: undefined)_
       * - **--checked-icon-color** - The color of the radio's checked icon. _(default: undefined)_
       * - **--checked-icon-scale** - The size of the checked icon relative to the radio. _(default: undefined)_
       * - **--toggle-size** - The size of the radio. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **control** - The circular container that wraps the radio's checked state.
       * - **control--checked** - The radio control when the radio is checked.
       * - **checked-icon** - The checked icon.
       * - **label** - The container that wraps the radio's label.
       */
      "wa-radio": {
        /**
         * The string pointing to a form's id.
         */
        "form"?: string;
        /**
         * The radio's value. When selected, the radio group will receive this value.
         */
        "value"?: string;
        /**
         * The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
         * attribute can typically be omitted.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Disables the radio.
         */
        "disabled"?: string;
        "children"?: any;
      };
      /**
       * Radios buttons allow the user to select a single option from a group using a button-like control.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the button loses focus.
       * - **wa-focus** - Emitted when the button gains focus.
       * 
       * ### **Methods:**
       *  - **focus(options: _FocusOptions_)** - Sets focus on the radio button.
       * - **blur()** - Removes focus from the radio button.
       * 
       * ### **Slots:**
       *  - _default_ - The radio button's label.
       * - **prefix** - A presentational prefix icon or similar element.
       * - **suffix** - A presentational suffix icon or similar element.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The button's background color. _(default: undefined)_
       * - **--background-color-active** - The button's background color when active. _(default: undefined)_
       * - **--background-color-hover** - The button's background color on hover. _(default: undefined)_
       * - **--border-color** - The color of the button's border. _(default: undefined)_
       * - **--border-color-active** - The color of the button's border when active. _(default: undefined)_
       * - **--border-color-hover** - The color of the button's border on hover. _(default: undefined)_
       * - **--border-radius** - The radius of the button's corners. _(default: undefined)_
       * - **--border-style** - The style of the button's border. _(default: undefined)_
       * - **--border-width** - The width of the button's border. Expects a single value. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the button. _(default: undefined)_
       * - **--indicator-color** - The color of the checked button indicator. _(default: undefined)_
       * - **--indicator-width** - The width of the checked button indicator. _(default: undefined)_
       * - **--label-color** - The color of the button's label. _(default: undefined)_
       * - **--label-color-active** - The color of the button's label when active. _(default: undefined)_
       * - **--label-color-hover** - The color of the button's label on hover. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **button** - The internal `<button>` element.
       * - **button--checked** - The internal button element when the radio button is checked.
       * - **prefix** - The container that wraps the prefix.
       * - **label** - The container that wraps the radio button's label.
       * - **suffix** - The container that wraps the suffix.
       */
      "wa-radio-button": {
        /**
         * The radio's value. When selected, the radio group will receive this value.
         */
        "value"?: string;
        /**
         * Disables the radio button.
         */
        "disabled"?: string;
        /**
         * The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
         * this attribute can typically be omitted.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Draws a pill-style radio button with rounded edges.
         */
        "pill"?: string;
        /**
         * The string pointing to a form's id.
         */
        "form"?: string;
        "children"?: any;
      };
      /**
       * Radio groups are used to group multiple [radios](/docs/components/radio) or [radio buttons](/docs/components/radio-button) so they function as a single form control.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-change** - Emitted when the radio group's selected value changes.
       * - **wa-input** - Emitted when the radio group receives user input.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Slots:**
       *  - _default_ - The default slot where `<wa-radio>` or `<wa-radio-button>` elements are placed.
       * - **label** - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
       * - **help-text** - Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
       * 
       * ### **CSS Parts:**
       *  - **form-control** - The form control that wraps the label, input, and help text.
       * - **form-control-label** - The label's wrapper.
       * - **form-control-input** - The input's wrapper.
       * - **form-control-help-text** - The help text's wrapper.
       * - **button-group** - The button group that wraps radio buttons.
       * - **button-group__base** - The button group's `base` part.
       */
      "wa-radio-group": {
        /**
         * The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
         * instead.
         */
        "label"?: string;
        /**
         * The radio groups's help text. If you need to display HTML, use the `help-text` slot instead.
         */
        "help-text"?: string;
        /**
         * The name of the radio group, submitted as a name/value pair with form data.
         */
        "name"?: string;
        "value"?: string;
        /**
         * The radio group's size. This size will be applied to all child radios and radio buttons.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Ensures a child radio is checked before allowing the containing form to submit.
         */
        "required"?: string;
        "children"?: any;
      };
      /**
       * Ranges allow the user to select a single value within a given range using a slider.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the control loses focus.
       * - **wa-change** - Emitted when an alteration to the control's value is committed by the user.
       * - **wa-focus** - Emitted when the control gains focus.
       * - **wa-input** - Emitted when the control receives input.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Methods:**
       *  - **focus(options: _FocusOptions_)** - Sets focus on the range.
       * - **blur()** - Removes focus from the range.
       * - **stepUp()** - Increments the value of the range by the value of the step attribute.
       * - **stepDown()** - Decrements the value of the range by the value of the step attribute.
       * 
       * ### **Slots:**
       *  - **label** - The range's label. Alternatively, you can use the `label` attribute.
       * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
       * 
       * ### **CSS Properties:**
       *  - **--thumb-color** - The color of the thumb. _(default: undefined)_
       * - **--thumb-gap** - The visual gap between the edges of the thumb and the track. _(default: undefined)_
       * - **--thumb-shadow** - The shadow effects around the edges of the thumb. _(default: undefined)_
       * - **--thumb-size** - The size of the thumb. _(default: undefined)_
       * - **--tooltip-offset** - The vertical distance the tooltip is offset from the track. _(default: undefined)_
       * - **--track-color-active** - The color of the portion of the track that represents the current value. _(default: undefined)_
       * - **--track-color-inactive** - The of the portion of the track that represents the remaining value. _(default: undefined)_
       * - **--track-height** - The height of the track. _(default: undefined)_
       * - **--track-active-offset** - The point of origin of the active track. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **form-control** - The form control that wraps the label, input, and help text.
       * - **form-control-label** - The label's wrapper.
       * - **form-control-input** - The range's wrapper.
       * - **form-control-help-text** - The help text's wrapper.
       * - **base** - The component's base wrapper.
       * - **input** - The internal `<input>` element.
       * - **tooltip** - The range's tooltip.
       */
      "wa-range": {
        "title"?: string;
        /**
         * The name of the range, submitted as a name/value pair with form data.
         */
        "name"?: string;
        /**
         * The default value of the form control. Primarily used for resetting the form control.
         */
        "value"?: string;
        /**
         * The range's label. If you need to display HTML, use the `label` slot instead.
         */
        "label"?: string;
        /**
         * The range's help text. If you need to display HTML, use the help-text slot instead.
         */
        "help-text"?: string;
        /**
         * Disables the range.
         */
        "disabled"?: string;
        /**
         * The minimum acceptable value of the range.
         */
        "min"?: string;
        /**
         * The maximum acceptable value of the range.
         */
        "max"?: string;
        /**
         * The interval at which the range will increase and decrease.
         */
        "step"?: string;
        /**
         * The preferred placement of the range's tooltip.
         */
        "tooltip"?: "top" | "bottom" | "none";
        /**
         * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
         * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
         * the same document or shadow root for this to work.
         */
        "form"?: string;
        "children"?: any;
      };
      /**
       * Ratings give users a way to quickly view and provide feedback.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-change** - Emitted when the rating's value changes.
       * - **wa-hover** - Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.
       * 
       * ### **Methods:**
       *  - **focus(options: _FocusOptions_)** - Sets focus on the rating.
       * - **blur()** - Removes focus from the rating.
       * 
       * ### **CSS Properties:**
       *  - **--symbol-color** - The inactive color for symbols. _(default: undefined)_
       * - **--symbol-color-active** - The active color for symbols. _(default: undefined)_
       * - **--symbol-size** - The size of symbols. _(default: undefined)_
       * - **--symbol-spacing** - The spacing to use around symbols. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-rating": {
        /**
         * A label that describes the rating to assistive devices.
         */
        "label"?: string;
        /**
         * The current rating.
         */
        "value"?: string;
        /**
         * The highest rating to show.
         */
        "max"?: string;
        /**
         * The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
         * attribute to `0.5`.
         */
        "precision"?: string;
        /**
         * Makes the rating readonly.
         */
        "readonly"?: string;
        /**
         * Disables the rating.
         */
        "disabled"?: string;
        /**
         * A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
         * The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
         * well with `<wa-icon>` elements.
         */
        "getSymbol"?: "(value: number) => string";
        "children"?: any;
      };
      /**
       * Outputs a localized time phrase relative to the current date and time.
       * ---
       * 
       */
      "wa-relative-time": {
        /**
         * The date from which to calculate time from. If not set, the current date and time will be used. When passing a
         * string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
         * a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
         */
        "date"?: "Date";
        /**
         * The formatting style to use.
         */
        "format"?: "long" | "short" | "narrow";
        /**
         * When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
         * "1 day ago" and "in 1 day" will be shown.
         */
        "numeric"?: "always" | "auto";
        /**
         * Keep the displayed value up to date as time passes.
         */
        "sync"?: string;
        "children"?: any;
      };
      /**
       * The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-resize** - Emitted when the element is resized.
       * 
       * ### **Slots:**
       *  - _default_ - One or more elements to watch for resizing.
       */
      "wa-resize-observer": {
        /**
         * Disables the observer.
         */
        "disabled"?: string;
        "children"?: any;
      };
      /**
       * Selects allow you to choose items from a menu of predefined options.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-change** - Emitted when the control's value changes.
       * - **wa-clear** - Emitted when the control's value is cleared.
       * - **wa-input** - Emitted when the control receives input.
       * - **wa-focus** - Emitted when the control gains focus.
       * - **wa-blur** - Emitted when the control loses focus.
       * - **wa-show** - Emitted when the select's menu opens.
       * - **wa-after-show** - Emitted after the select's menu opens and all animations are complete.
       * - **wa-hide** - Emitted when the select's menu closes.
       * - **wa-after-hide** - Emitted after the select's menu closes and all animations are complete.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Methods:**
       *  - **show()** - Shows the listbox.
       * - **hide()** - Hides the listbox.
       * - **focus(options: _FocusOptions_)** - Sets focus on the control.
       * - **blur()** - Removes focus from the control.
       * 
       * ### **Slots:**
       *  - _default_ - The listbox options. Must be `<wa-option>` elements. You can use `<wa-divider>` to group items visually.
       * - **label** - The input's label. Alternatively, you can use the `label` attribute.
       * - **prefix** - Used to prepend a presentational icon or similar element to the combobox.
       * - **clear-icon** - An icon to use in lieu of the default clear icon.
       * - **expand-icon** - The icon to show when the control is expanded and collapsed. Rotates on open and close.
       * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The background color of the select's combobox. _(default: undefined)_
       * - **--border-color** - The border color of the select's combobox. _(default: undefined)_
       * - **--border-radius** - The border radius of the select's combobox. _(default: undefined)_
       * - **--border-style** - The style of the select's borders, including the listbox. _(default: undefined)_
       * - **--border-width** - The width of the select's borders, including the listbox. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the select's combobox. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **form-control** - The form control that wraps the label, input, and help text.
       * - **form-control-label** - The label's wrapper.
       * - **form-control-input** - The select's wrapper.
       * - **form-control-help-text** - The help text's wrapper.
       * - **combobox** - The container the wraps the prefix, combobox, clear icon, and expand button.
       * - **prefix** - The container that wraps the prefix slot.
       * - **display-input** - The element that displays the selected option's label, an `<input>` element.
       * - **listbox** - The listbox container where options are slotted.
       * - **tags** - The container that houses option tags when `multiselect` is used.
       * - **tag** - The individual tags that represent each multiselect option.
       * - **tag__base** - The tag's base part.
       * - **tag__content** - The tag's content part.
       * - **tag__remove-button** - The tag's remove button.
       * - **tag__remove-button__base** - The tag's remove button base part.
       * - **clear-button** - The clear button.
       * - **expand-icon** - The container that wraps the expand icon.
       */
      "wa-select": {
        /**
         * The name of the select, submitted as a name/value pair with form data.
         */
        "name"?: string;
        "value"?: string;
        /**
         * The select's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Placeholder text to show as a hint when the select is empty.
         */
        "placeholder"?: string;
        /**
         * Allows more than one option to be selected.
         */
        "multiple"?: string;
        /**
         * The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
         * indicate the number of additional items that are selected. Set to 0 to remove the limit.
         */
        "max-options-visible"?: string;
        /**
         * Disables the select control.
         */
        "disabled"?: string;
        /**
         * Adds a clear button when the select is not empty.
         */
        "clearable"?: string;
        /**
         * Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
         * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
         */
        "open"?: string;
        /**
         * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
         * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
         */
        "hoist"?: string;
        /**
         * Draws a filled select.
         */
        "filled"?: string;
        /**
         * Draws a pill-style select with rounded edges.
         */
        "pill"?: string;
        /**
         * The select's label. If you need to display HTML, use the `label` slot instead.
         */
        "label"?: string;
        /**
         * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
         * inside of the viewport.
         */
        "placement"?: "top" | "bottom";
        /**
         * The select's help text. If you need to display HTML, use the `help-text` slot instead.
         */
        "help-text"?: string;
        /**
         * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
         * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
         * the same document or shadow root for this to work.
         */
        "form"?: string;
        /**
         * The select's required attribute.
         */
        "required"?: string;
        /**
         * A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
         * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted
         * HTML of the symbol to render at the specified value.
         */
        "getTag"?: "(option: WaOption, index: number) => TemplateResult" | "HTMLElement";
        "children"?: any;
      };
      /**
       * Skeletons are used to provide a visual representation of where content will eventually be drawn.
       * ---
       * 
       * 
       * ### **CSS Properties:**
       *  - **--border-radius** - The skeleton's border radius. _(default: undefined)_
       * - **--color** - The color of the skeleton. _(default: undefined)_
       * - **--sheen-color** - The sheen color when the skeleton is in its loading state. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **indicator** - The skeleton's indicator which is responsible for its color and animation.
       */
      "wa-skeleton": {
        /**
         * Determines which effect the skeleton will use.
         */
        "effect"?: "pulse" | "sheen" | "none";
        "children"?: any;
      };
      /**
       * Spinners are used to show the progress of an indeterminate operation.
       * ---
       * 
       * 
       * ### **CSS Properties:**
       *  - **--track-width** - The width of the track. _(default: undefined)_
       * - **--track-color** - The color of the track. _(default: undefined)_
       * - **--indicator-color** - The color of the spinner's indicator. _(default: undefined)_
       * - **--speed** - The time it takes for the spinner to complete one animation cycle. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-spinner": {
        "children"?: any;
      };
      /**
       * Split panels display two adjacent panels, allowing the user to reposition them.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-reposition** - Emitted when the divider's position changes.
       * 
       * ### **Slots:**
       *  - **start** - Content to place in the start panel.
       * - **end** - Content to place in the end panel.
       * - **divider** - The divider. Useful for slotting in a custom icon that renders as a handle.
       * 
       * ### **CSS Properties:**
       *  - **--divider-color** - The color of the divider. _(default: undefined)_
       * - **--divider-width** - The width of the visible divider. _(default: 4px)_
       * - **--divider-hit-area** - The invisible region around the divider where dragging can occur. This is usually wider than the divider to facilitate easier dragging. _(default: 12px)_
       * - **--min** - The minimum allowed size of the primary panel. _(default: 0)_
       * - **--max** - The maximum allowed size of the primary panel. _(default: 100%)_
       * 
       * ### **CSS Parts:**
       *  - **start** - The start panel.
       * - **end** - The end panel.
       * - **panel** - Targets both the start and end panels.
       * - **divider** - The divider that separates the start and end panels.
       */
      "wa-split-panel": {
        /**
         * The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
         * container's initial size.
         */
        "position"?: string;
        /**
         * The current position of the divider from the primary panel's edge in pixels.
         */
        "position-in-pixels"?: string;
        /**
         * Draws the split panel in a vertical orientation with the start and end panels stacked.
         */
        "vertical"?: string;
        /**
         * Disables resizing. Note that the position may still change as a result of resizing the host element.
         */
        "disabled"?: string;
        /**
         * If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
         * primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
         * host element is resized.
         */
        "primary"?: "start" | "end";
        /**
         * One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
         * `"100px 50%"`.
         */
        "snap"?: string;
        /**
         * How close the divider must be to a snap point until snapping occurs.
         */
        "snap-threshold"?: string;
        "children"?: any;
      };
      /**
       * Switches allow the user to toggle an option on or off.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the control loses focus.
       * - **wa-change** - Emitted when the control's checked state changes.
       * - **wa-input** - Emitted when the control receives input.
       * - **wa-focus** - Emitted when the control gains focus.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Methods:**
       *  - **click()** - Simulates a click on the switch.
       * - **focus(options: _FocusOptions_)** - Sets focus on the switch.
       * - **blur()** - Removes focus from the switch.
       * 
       * ### **Slots:**
       *  - _default_ - The switch's label.
       * - **help-text** - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The switch's background color. _(default: undefined)_
       * - **--background-color-checked** - The switch's background color when checked. _(default: undefined)_
       * - **--border-color** - The color of the switch's borders. _(default: undefined)_
       * - **--border-color-checked** - The color of the switch's borders when checked. _(default: undefined)_
       * - **--border-style** - The style of the switch's borders. _(default: undefined)_
       * - **--border-width** - The width of the switch's borders. Expects a single value. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the switch. _(default: undefined)_
       * - **--height** - The height of the switch. _(default: undefined)_
       * - **--thumb-color** - The color of the thumb. _(default: undefined)_
       * - **--thumb-color-checked** - The color of the thumb when checked. _(default: undefined)_
       * - **--thumb-shadow** - The shadow effects around the edges of the thumb. _(default: undefined)_
       * - **--thumb-size** - The size of the thumb. _(default: undefined)_
       * - **--width** - The width of the switch. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **control** - The control that houses the switch's thumb.
       * - **thumb** - The switch's thumb.
       * - **label** - The switch's label.
       * - **form-control-help-text** - The help text's wrapper.
       */
      "wa-switch": {
        "title"?: string;
        /**
         * The name of the switch, submitted as a name/value pair with form data.
         */
        "name"?: string;
        /**
         * The current value of the switch, submitted as a name/value pair with form data.
         */
        "value"?: string;
        /**
         * The switch's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Disables the switch.
         */
        "disabled"?: string;
        /**
         * The default value of the form control. Primarily used for resetting the form control.
         */
        "checked"?: string;
        /**
         * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
         * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
         * the same document or shadow root for this to work.
         */
        "form"?: string;
        /**
         * Makes the switch a required field.
         */
        "required"?: string;
        /**
         * The switch's help text. If you need to display HTML, use the `help-text` slot instead.
         */
        "help-text"?: string;
        "children"?: any;
      };
      /**
       * Tabs are used inside [tab groups](/docs/components/tab-group) to represent and activate [tab panels](/docs/components/tab-panel).
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The tab's label.
       * 
       * ### **CSS Properties:**
       *  - **--active-tab-color** - The color of the active tab's label. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **close-button** - The close button, an `<wa-icon-button>`.
       * - **close-button__base** - The close button's exported `base` part.
       */
      "wa-tab": {
        /**
         * The name of the tab panel this tab is associated with. The panel must be located in the same tab group.
         */
        "panel"?: string;
        /**
         * Disables the tab and prevents selection.
         */
        "disabled"?: string;
        "children"?: any;
      };
      /**
       * Tab groups organize content into a container that shows one section at a time.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-tab-show** - Emitted when a tab is shown.
       * - **wa-tab-hide** - Emitted when a tab is hidden.
       * 
       * ### **Slots:**
       *  - _default_ - Used for grouping tab panels in the tab group. Must be `<wa-tab-panel>` elements.
       * - **nav** - Used for grouping tabs in the tab group. Must be `<wa-tab>` elements.
       * 
       * ### **CSS Properties:**
       *  - **--indicator-color** - The color of the active tab indicator. _(default: undefined)_
       * - **--track-color** - The color of the indicator's track (the line that separates tabs from panels). _(default: undefined)_
       * - **--track-width** - The width of the indicator's track (the line that separates tabs from panels). _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **nav** - The tab group's navigation container where tabs are slotted in.
       * - **tabs** - The container that wraps the tabs.
       * - **body** - The tab group's body where tab panels are slotted in.
       * - **scroll-button** - The previous/next scroll buttons that show when tabs are scrollable, an `<wa-icon-button>`.
       * - **scroll-button--start** - The starting scroll button.
       * - **scroll-button--end** - The ending scroll button.
       * - **scroll-button__base** - The scroll button's exported `base` part.
       */
      "wa-tab-group": {
        /**
         * Sets the active tab.
         */
        "active"?: string;
        /**
         * The placement of the tabs.
         */
        "placement"?: "top" | "bottom" | "start" | "end";
        /**
         * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
         * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
         */
        "activation"?: "auto" | "manual";
        /**
         * Disables the scroll arrows that appear when tabs overflow.
         */
        "no-scroll-controls"?: string;
        "children"?: any;
      };
      /**
       * Tab panels are used inside [tab groups](/docs/components/tab-group) to display tabbed content.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The tab panel's content.
       * 
       * ### **CSS Properties:**
       *  - **--padding** - The tab panel's padding. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-tab-panel": {
        /**
         * The tab panel's name.
         */
        "name"?: string;
        /**
         * When true, the tab panel will be shown.
         */
        "active"?: string;
        "children"?: any;
      };
      /**
       * Tags are used as labels to organize things or to indicate a selection.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-remove** - Emitted when the remove button is activated.
       * 
       * ### **Slots:**
       *  - _default_ - The tag's content.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The tag's background color. _(default: undefined)_
       * - **--border-color** - The color of the tag's border. _(default: undefined)_
       * - **--border-radius** - The radius of the tag's corners. _(default: undefined)_
       * - **--border-style** - The style of the tag's border. _(default: undefined)_
       * - **--border-width** - The width of the tag's border. _(default: undefined)_
       * - **--content-color** - The color of the tag's content. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **content** - The tag's content.
       * - **remove-button** - The tag's remove button, an `<wa-icon-button>`.
       * - **remove-button__base** - The remove button's exported `base` part.
       */
      "wa-tag": {
        /**
         * The tag's theme variant.
         */
        "variant"?: "brand" | "success" | "neutral" | "warning" | "danger" | "text";
        /**
         * The tag's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Draws a pill-style tag with rounded edges.
         */
        "pill"?: string;
        /**
         * Makes the tag removable and shows a remove button.
         */
        "removable"?: string;
        "children"?: any;
      };
      /**
       * Textareas collect data from the user and allow multiple lines of text.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-blur** - Emitted when the control loses focus.
       * - **wa-change** - Emitted when an alteration to the control's value is committed by the user.
       * - **wa-focus** - Emitted when the control gains focus.
       * - **wa-input** - Emitted when the control receives input.
       * - **wa-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
       * 
       * ### **Methods:**
       *  - **focus(options: _FocusOptions_)** - Sets focus on the textarea.
       * - **blur()** - Removes focus from the textarea.
       * - **select()** - Selects all the text in the textarea.
       * - **scrollPosition(position: _{ top?: number; left?: number }_): _{ top: number; left: number } | undefined_** - Gets or sets the textarea's scroll position.
       * - **setSelectionRange(selectionStart: _number_, selectionEnd: _number_, selectionDirection: _'forward' | 'backward' | 'none'_)** - Sets the start and end positions of the text selection (0-based).
       * - **setRangeText(replacement: _string_, start: _number_, end: _number_, selectMode: _'select' | 'start' | 'end' | 'preserve'_)** - Replaces a range of text with a new string.
       * 
       * ### **Slots:**
       *  - **label** - The textarea's label. Alternatively, you can use the `label` attribute.
       * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The textarea's background color. _(default: undefined)_
       * - **--border-color** - The color of the textarea's borders. _(default: undefined)_
       * - **--border-radius** - The border radius of the textarea's corners. _(default: undefined)_
       * - **--border-style** - The style of the textarea's borders. _(default: undefined)_
       * - **--border-width** - The width of the textarea's borders. _(default: undefined)_
       * - **--box-shadow** - The shadow effects around the edges of the textarea. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **form-control** - The form control that wraps the label, input, and help text.
       * - **form-control-label** - The label's wrapper.
       * - **form-control-input** - The input's wrapper.
       * - **form-control-help-text** - The help text's wrapper.
       * - **base** - The component's base wrapper.
       * - **textarea** - The internal `<textarea>` control.
       */
      "wa-textarea": {
        "title"?: string;
        /**
         * The name of the textarea, submitted as a name/value pair with form data.
         */
        "name"?: string;
        /**
         * The default value of the form control. Primarily used for resetting the form control.
         */
        "value"?: string;
        /**
         * The textarea's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
         * Draws a filled textarea.
         */
        "filled"?: string;
        /**
         * The textarea's label. If you need to display HTML, use the `label` slot instead.
         */
        "label"?: string;
        /**
         * The textarea's help text. If you need to display HTML, use the `help-text` slot instead.
         */
        "help-text"?: string;
        /**
         * Placeholder text to show as a hint when the input is empty.
         */
        "placeholder"?: string;
        /**
         * The number of rows to display by default.
         */
        "rows"?: string;
        /**
         * Controls how the textarea can be resized.
         */
        "resize"?: "none" | "vertical" | "auto";
        /**
         * Disables the textarea.
         */
        "disabled"?: string;
        /**
         * Makes the textarea readonly.
         */
        "readonly"?: string;
        /**
         * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
         * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
         * the same document or shadow root for this to work.
         */
        "form"?: string;
        /**
         * Makes the textarea a required field.
         */
        "required"?: string;
        /**
         * The minimum length of input that will be considered valid.
         */
        "minlength"?: string;
        /**
         * The maximum length of input that will be considered valid.
         */
        "maxlength"?: string;
        /**
         * Controls whether and how text input is automatically capitalized as it is entered by the user.
         */
        "autocapitalize"?: "off" | "none" | "on" | "sentences" | "words" | "characters";
        /**
         * Indicates whether the browser's autocorrect feature is on or off.
         */
        "autocorrect"?: string;
        /**
         * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
         * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
         */
        "autocomplete"?: string;
        /**
         * Indicates that the input should receive focus on page load.
         */
        "autofocus"?: string;
        /**
         * Used to customize the label or icon of the Enter key on virtual keyboards.
         */
        "enterkeyhint"?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
        /**
         * Enables spell checking on the textarea.
         */
        "spellcheck"?: string;
        /**
         * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
         * keyboard on supportive devices.
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        "children"?: any;
      };
      /**
       * Tooltips display additional information based on a specific action.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-show** - Emitted when the tooltip begins to show.
       * - **wa-after-show** - Emitted after the tooltip has shown and all animations are complete.
       * - **wa-hide** - Emitted when the tooltip begins to hide.
       * - **wa-after-hide** - Emitted after the tooltip has hidden and all animations are complete.
       * 
       * ### **Methods:**
       *  - **show()** - Shows the tooltip.
       * - **hide()** - Hides the tooltip
       * 
       * ### **Slots:**
       *  - _default_ - The tooltip's default slot where any content should live. Interactive content should be avoided.
       * 
       * ### **CSS Properties:**
       *  - **--background-color** - The tooltip's background color. _(default: undefined)_
       * - **--border-radius** - The radius of the tooltip's corners. _(default: undefined)_
       * - **--content-color** - The color of the tooltip's content. _(default: undefined)_
       * - **--max-width** - The maximum width of the tooltip before its content will wrap. _(default: undefined)_
       * - **--padding** - The padding within the tooltip. _(default: undefined)_
       * - **--hide-delay** - The amount of time to wait before hiding the tooltip when hovering. _(default: undefined)_
       * - **--show-delay** - The amount of time to wait before showing the tooltip when hovering. _(default: undefined)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper, an `<wa-popup>` element.
       * - **base__popup** - The popup's exported `popup` part. Use this to target the tooltip's popup container.
       * - **base__arrow** - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
       * - **body** - The tooltip's body where its content is rendered.
       */
      "wa-tooltip": {
        /**
         * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
         * inside of the viewport.
         */
        "placement"?: "" | "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
        /**
         * Disables the tooltip so it won't show when triggered.
         */
        "disabled"?: string;
        /**
         * The distance in pixels from which to offset the tooltip away from its target.
         */
        "distance"?: string;
        /**
         * Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.
         */
        "open"?: string;
        /**
         * The distance in pixels from which to offset the tooltip along its target.
         */
        "skidding"?: string;
        /**
         * The amount of time to wait before showing the tooltip when the user mouses in.
         */
        "show-delay"?: string;
        /**
         * The amount of time to wait before hiding the tooltip when the user mouses out..
         */
        "hide-delay"?: string;
        /**
         * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
         * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
         * programmatically.
         */
        "trigger"?: string;
        /**
         * Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
         * `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
         * scenarios.
         */
        "hoist"?: string;
        "for"?: string;
        "children"?: any;
      };
      /**
       * Trees allow you to display a hierarchical list of selectable [tree items](/docs/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-selection-change** - Emitted when a tree item is selected or deselected.
       * 
       * ### **Slots:**
       *  - _default_ - The default slot.
       * - **expand-icon** - The icon to show when the tree item is expanded. Works best with `<wa-icon>`.
       * - **collapse-icon** - The icon to show when the tree item is collapsed. Works best with `<wa-icon>`.
       * 
       * ### **CSS Properties:**
       *  - **--indent-size** - The size of the indentation for nested items. _(default: var(--wa-spacing-m))_
       * - **--indent-guide-color** - The color of the indentation line. _(default: var(--wa-color-surface-border))_
       * - **--indent-guide-offset** - The amount of vertical spacing to leave between the top and bottom of the indentation line's starting position. _(default: 0)_
       * - **--indent-guide-style** - The style of the indentation line, e.g. solid, dotted, dashed. _(default: solid)_
       * - **--indent-guide-width** - The width of the indentation line. _(default: 0)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       */
      "wa-tree": {
        /**
         * The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
         * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
         */
        "selection"?: "single" | "multiple" | "leaf";
        "children"?: any;
      };
      /**
       * A tree item serves as a hierarchical node that lives inside a [tree](/docs/components/tree).
       * ---
       * 
       * 
       * ### **Events:**
       *  - **undefined** - undefined
       * - **wa-expand** - Emitted when the tree item expands.
       * - **wa-after-expand** - Emitted after the tree item expands and all animations are complete.
       * - **wa-collapse** - Emitted when the tree item collapses.
       * - **wa-after-collapse** - Emitted after the tree item collapses and all animations are complete.
       * - **wa-lazy-change** - Emitted when the tree item's lazy state changes.
       * - **wa-lazy-load** - Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree.
       * 
       * ### **Methods:**
       *  - **getChildrenItems({ includeDisabled = true }: _{ includeDisabled?: boolean }_): _WaTreeItem[]_** - Gets all the nested tree items in this node.
       * 
       * ### **Slots:**
       *  - _default_ - The default slot.
       * - **expand-icon** - The icon to show when the tree item is expanded.
       * - **collapse-icon** - The icon to show when the tree item is collapsed.
       * 
       * ### **CSS Properties:**
       *  - **--selection-background-color** - The background color of selected tree items. _(default: undefined)_
       * - **--selection-indicator-color** - The color the indicator for selected tree items. _(default: undefined)_
       * - **--expand-button-color** - The color of the expand button. _(default: undefined)_
       * - **--show-duration** - The animation duration when expanding tree items. _(default: 200ms)_
       * - **--hide-duration** - The animation duration when collapsing tree items. _(default: 200ms)_
       * 
       * ### **CSS Parts:**
       *  - **base** - The component's base wrapper.
       * - **item** - The tree item's container. This element wraps everything except slotted tree item children.
       * - **item--disabled** - Applied when the tree item is disabled.
       * - **item--expanded** - Applied when the tree item is expanded.
       * - **item--indeterminate** - Applied when the selection is indeterminate.
       * - **item--selected** - Applied when the tree item is selected.
       * - **indentation** - The tree item's indentation container.
       * - **expand-button** - The container that wraps the tree item's expand button and spinner.
       * - **spinner** - The spinner that shows when a lazy tree item is in the loading state.
       * - **spinner__base** - The spinner's base part.
       * - **label** - The tree item's label.
       * - **children** - The container that wraps the tree item's nested children.
       * - **checkbox** - The checkbox that shows when using multiselect.
       * - **checkbox__base** - The checkbox's exported `base` part.
       * - **checkbox__control** - The checkbox's exported `control` part.
       * - **checkbox__control--checked** - The checkbox's exported `control--checked` part.
       * - **checkbox__control--indeterminate** - The checkbox's exported `control--indeterminate` part.
       * - **checkbox__checked-icon** - The checkbox's exported `checked-icon` part.
       * - **checkbox__indeterminate-icon** - The checkbox's exported `indeterminate-icon` part.
       * - **checkbox__label** - The checkbox's exported `label` part.
       */
      "wa-tree-item": {
        /**
         * Expands the tree item.
         */
        "expanded"?: string;
        /**
         * Draws the tree item in a selected state.
         */
        "selected"?: string;
        /**
         * Disables the tree item.
         */
        "disabled"?: string;
        /**
         * Enables lazy loading behavior.
         */
        "lazy"?: string;
        "children"?: any;
      };
      /**
       * The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
       * ---
       * 
       * 
       * ### **Slots:**
       *  - _default_ - The content to be visually hidden.
       */
      "wa-visually-hidden": {
        "children"?: any;
      };
    }
  }
}
