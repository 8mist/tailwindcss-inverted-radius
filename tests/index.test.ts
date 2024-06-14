import { expect } from '@jest/globals'
import { html, css, run } from './run'

it('should be possible to use default inv-rad spacing', () => {
  let config = {
    content: [
      {
        raw: html`
          <div>
            <div class="inv-rad inv-rad-0"></div>
            <div class="inv-rad inv-rad-1"></div>
            <div class="inv-rad inv-rad-2"></div>
            <div class="inv-rad inv-rad-2.5"></div>
            <div class="inv-rad inv-rad-3"></div>
            <div class="inv-rad inv-rad-3.5"></div>
            <div class="inv-rad inv-rad-4"></div>
            <div class="inv-rad inv-rad-5"></div>
            <div class="inv-rad inv-rad-6"></div>
          </div>
        `,
      },
    ],
    theme: {},
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind components;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      .inv-rad {
        --inv-rad-tl-size: 0;
        --inv-rad-tr-size: 0;
        --inv-rad-bl-size: 0;
        --inv-rad-br-size: 0;
        -webkit-mask-position: 0 0, 100% 0, 0 100%, 100% 100%;
        mask-position: 0 0, 100% 0, 0 100%, 100% 100%;
        -webkit-mask-size: 51% 51%;
        mask-size: 51% 51%;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-clip: border-box, border-box, border-box, border-box;
        mask-clip: border-box, border-box, border-box, border-box;
        -webkit-mask-origin: border-box, border-box, border-box, border-box;
        mask-origin: border-box, border-box, border-box, border-box;
        -webkit-mask-composite: source-over, source-over, source-over, source-over;
        mask-composite: add, add, add, add;
        -webkit-mask-source-type: auto, auto, auto, auto;
        mask-mode: match-source, match-source, match-source, match-source;
      }
      .inv-rad-0 {
        --inv-rad-tl-size: 0px;
        --inv-rad-tr-size: 0px;
        --inv-rad-bl-size: 0px;
        --inv-rad-br-size: 0px;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-1 {
        --inv-rad-tl-size: 0.25rem;
        --inv-rad-tr-size: 0.25rem;
        --inv-rad-bl-size: 0.25rem;
        --inv-rad-br-size: 0.25rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-2 {
        --inv-rad-tl-size: 0.5rem;
        --inv-rad-tr-size: 0.5rem;
        --inv-rad-bl-size: 0.5rem;
        --inv-rad-br-size: 0.5rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-3 {
        --inv-rad-tl-size: 0.75rem;
        --inv-rad-tr-size: 0.75rem;
        --inv-rad-bl-size: 0.75rem;
        --inv-rad-br-size: 0.75rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-4 {
        --inv-rad-tl-size: 1rem;
        --inv-rad-tr-size: 1rem;
        --inv-rad-bl-size: 1rem;
        --inv-rad-br-size: 1rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-5 {
        --inv-rad-tl-size: 1.25rem;
        --inv-rad-tr-size: 1.25rem;
        --inv-rad-bl-size: 1.25rem;
        --inv-rad-br-size: 1.25rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-6 {
        --inv-rad-tl-size: 1.5rem;
        --inv-rad-tr-size: 1.5rem;
        --inv-rad-bl-size: 1.5rem;
        --inv-rad-br-size: 1.5rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-2\.5 {
        --inv-rad-tl-size: 0.625rem;
        --inv-rad-tr-size: 0.625rem;
        --inv-rad-bl-size: 0.625rem;
        --inv-rad-br-size: 0.625rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-3\.5 {
        --inv-rad-tl-size: 0.875rem;
        --inv-rad-tr-size: 0.875rem;
        --inv-rad-bl-size: 0.875rem;
        --inv-rad-br-size: 0.875rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
    `)
  })
})

it('should be possible to use specific corner', () => {
  let config = {
    content: [
      {
        raw: html`
          <div>
            <div class="inv-rad inv-rad-t-4"></div>
            <div class="inv-rad inv-rad-t-l-4"></div>
            <div class="inv-rad inv-rad-t-r-4"></div>
            <div class="inv-rad inv-rad-r-4"></div>
            <div class="inv-rad inv-rad-b-l-4"></div>
            <div class="inv-rad inv-rad-b-r-4"></div>
            <div class="inv-rad inv-rad-l-4"></div>
          </div>
        `,
      },
    ],
    theme: {},
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind components;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      .inv-rad {
        --inv-rad-tl-size: 0;
        --inv-rad-tr-size: 0;
        --inv-rad-bl-size: 0;
        --inv-rad-br-size: 0;
        -webkit-mask-position: 0 0, 100% 0, 0 100%, 100% 100%;
        mask-position: 0 0, 100% 0, 0 100%, 100% 100%;
        -webkit-mask-size: 51% 51%;
        mask-size: 51% 51%;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-clip: border-box, border-box, border-box, border-box;
        mask-clip: border-box, border-box, border-box, border-box;
        -webkit-mask-origin: border-box, border-box, border-box, border-box;
        mask-origin: border-box, border-box, border-box, border-box;
        -webkit-mask-composite: source-over, source-over, source-over, source-over;
        mask-composite: add, add, add, add;
        -webkit-mask-source-type: auto, auto, auto, auto;
        mask-mode: match-source, match-source, match-source, match-source;
      }
      .inv-rad-t-4 {
        --inv-rad-tl-size: 1rem;
        --inv-rad-tr-size: 1rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-t-l-4 {
        --inv-rad-tl-size: 1rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-t-r-4 {
        --inv-rad-tr-size: 1rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-b-l-4 {
        --inv-rad-bl-size: 1rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-b-r-4 {
        --inv-rad-br-size: 1rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-l-4 {
        --inv-rad-tl-size: 1rem;
        --inv-rad-bl-size: 1rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-r-4 {
        --inv-rad-tr-size: 1rem;
        --inv-rad-br-size: 1rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
    `)
  })
})

it('should be possible to use custom spacing', () => {
  let config = {
    content: [
      {
        raw: html`
          <div>
            <div class="inv-rad inv-rad-4.5"></div>
            <div class="inv-rad inv-rad-t-4.5"></div>
            <div class="inv-rad inv-rad-t-l-4.5"></div>
            <div class="inv-rad inv-rad-t-r-4.5"></div>
            <div class="inv-rad inv-rad-r-4.5"></div>
            <div class="inv-rad inv-rad-b-l-4.5"></div>
            <div class="inv-rad inv-rad-b-r-4.5"></div>
            <div class="inv-rad inv-rad-l-4.5"></div>
          </div>
        `,
      },
    ],
    theme: {
      invRad: {
        '4.5': '1.125rem',
      },
    },
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind components;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      .inv-rad {
        --inv-rad-tl-size: 0;
        --inv-rad-tr-size: 0;
        --inv-rad-bl-size: 0;
        --inv-rad-br-size: 0;
        -webkit-mask-position: 0 0, 100% 0, 0 100%, 100% 100%;
        mask-position: 0 0, 100% 0, 0 100%, 100% 100%;
        -webkit-mask-size: 51% 51%;
        mask-size: 51% 51%;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-clip: border-box, border-box, border-box, border-box;
        mask-clip: border-box, border-box, border-box, border-box;
        -webkit-mask-origin: border-box, border-box, border-box, border-box;
        mask-origin: border-box, border-box, border-box, border-box;
        -webkit-mask-composite: source-over, source-over, source-over, source-over;
        mask-composite: add, add, add, add;
        -webkit-mask-source-type: auto, auto, auto, auto;
        mask-mode: match-source, match-source, match-source, match-source;
      }
      .inv-rad-4\.5 {
        --inv-rad-tl-size: 1.125rem;
        --inv-rad-tr-size: 1.125rem;
        --inv-rad-bl-size: 1.125rem;
        --inv-rad-br-size: 1.125rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-t-4\.5 {
        --inv-rad-tl-size: 1.125rem;
        --inv-rad-tr-size: 1.125rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-t-l-4\.5 {
        --inv-rad-tl-size: 1.125rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-t-r-4\.5 {
        --inv-rad-tr-size: 1.125rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-b-l-4\.5 {
        --inv-rad-bl-size: 1.125rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-b-r-4\.5 {
        --inv-rad-br-size: 1.125rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
      .inv-rad-l-4\.5 {
        --inv-rad-tl-size: 1.125rem;
        --inv-rad-bl-size: 1.125rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 0, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 98%, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 0, #000);
      }
      .inv-rad-r-4\.5 {
        --inv-rad-tr-size: 1.125rem;
        --inv-rad-br-size: 1.125rem;
        -webkit-mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
        mask-image: radial-gradient(var(--inv-rad-tl-size, 0) at left top, #0000 0, #000),
          radial-gradient(var(--inv-rad-tr-size, 0) at right top, #0000 98%, #000),
          radial-gradient(var(--inv-rad-bl-size, 0) at left bottom, #0000 0, #000),
          radial-gradient(var(--inv-rad-br-size, 0) at right bottom, #0000 98%, #000);
      }
    `)
  })
})
