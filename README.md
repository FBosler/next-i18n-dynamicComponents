## Getting started:

`
yarn dev
`

## Good case:

Navigate to:
- http://localhost:3000/<LOCALE\>/components/ComponentOne
- http://localhost:3000/<LOCALE\>/components/ComponentTwo

where LOCALE is element of ['de','en']

This works fine

## Bad case:

Navigate to:
- http://localhost:3000/<LOCALE\>/switcher
  
where LOCALE is element of ['de','en']

Translation does not work as expected (or at all for that  matter)
