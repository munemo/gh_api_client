import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  return (
    <>
      <Input
        id="input"
        type="text"
        name="search"
        placeholder="Input GH username"
      />
      <Button id="button"  name="search">
        Search
      </Button>
    </>
  );
}

export default GHSearch
