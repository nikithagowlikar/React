# Namaste react

# parcel

-Dev Build
-Local Server
-HMR = Hot module Replacement
-File watching Algorithm - written in c++
-Caching -Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling -support older browsers
-Diagnostic
-Error Handling
-HTTPs (also able to run)
-Tree Shaking -removed unused code
-Different dev and prod bundles

# how things works

-load-render-api-render
-component render - then -useEffect will call

# Redux toolkit 
-Install @reduxjs/toolkit and react-redux
-Buils our store
-connect out store to our app
-slice (cartSlice)
-dispatch (action)
-selector
-click a add button->dispatch an action->reducer(fn)-> store(slider)
-cart will be updated by subscribing the store(selector)

# setting up testing in our App
-install react testing library
-installed jest
-install babel dependencies
-configure babel
-configure parcel .config file to disable default babel transpilation
-Jest configuration(npx jest --init)
-install js dom library
-Install @babel/preset-react -to make js work in test cased
-Include @babel/presetc-react inside my babel config
