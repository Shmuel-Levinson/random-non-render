To run this example locally
- `npm run dev`

1) Open up the matches tab
2) Go to the working link
3) Observe there are 2 matches (one for the `route.tsx` file and the other for `index.tsx`)
4) Go to the not-working link and see the path for `index.tsx` is NOT matched and hence nothing is displayed.

Renaming the non-working page's folder can fix the problem without any other changes introduced.
The minimal setup for this is to have a `route.tsx` file that renders nothing (or outlet) and an `index.tsx` file that renders the component we want to see.
