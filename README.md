# Recipe Dashboard
Creating a Recipe Dashboard using TDD as a practice. I am trying to do this as quickly and effectively as possible. In that spirit, I will most likely allow myself two nights after work to work on this.

# Requirements - MVP
1) User should be able to search for recipe by ingredient name - done
2) The table row contains the recipe name + a link button that takes the user to another page with recipe info - done
3) Recipe info page contains recipe + options to change from US to metric - done
4) User should be able to select how many results to get back - default to 10 - done
5) Performance Enhancement to code as needed

# Ideas to Implement for Performance
1) Fix failing tests - look at https://stackoverflow.com/questions/55644155/how-would-i-test-for-a-react-router-route-param-in-react-testing-library
1) React.memo
2) useMemo
3) useCallback
4) Merge state as shown here for axios requests : https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re