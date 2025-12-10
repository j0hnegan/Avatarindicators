# Avatar Stroke System

## Current Structure in Frame552.tsx

### Outer Div (Colored Status Ring)
- **Border**: `border-4` (4px solid border)
- **Color**: `border-[#52cbfa]` (Exercise due - blue)
- **Border Style**: `border-solid`
- **Shape**: `rounded-full`
- **Size**: NOT explicitly set - should auto-size based on content

### Inner Div (Dark Separator Stroke)
- **Border**: `border-2` (2px solid border)
- **Color**: `border-[#1a1a1a]` (dark stroke)
- **Border Style**: `border-solid`
- **Shape**: `rounded-full`
- **Size**: NOT explicitly set - should auto-size based on image

### Image
- **Size**: `size-[36px]` (36px x 36px)
- **Shape**: `rounded-full`
- **Display**: `block`

## Expected Visual Result

From outside to inside:
1. 4px blue colored ring (#52cbfa)
2. 2px dark stroke (#1a1a1a)
3. 36px circular avatar image

## Total Expected Size
- Image: 36px
- Inner div (with 2px border on each side): 36px + 4px = 40px
- Outer div (with 4px border on each side): 40px + 8px = 48px

**Total avatar component should be 48px x 48px**

## Potential Issue

The borders might not be visible because:
1. No explicit width/height on the divs
2. Borders collapse into each other
3. Need padding or spacing between borders to see the dark stroke
