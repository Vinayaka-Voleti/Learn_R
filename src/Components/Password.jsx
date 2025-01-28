const Passowrd = (props) => {
    const ValidPass = ()=>  <h1>Valid Password</h1>
  const InvalidPass = ()=> <h1>Invalid Password</h1>
    //   if (props.isValid)
    //     return <ValidPass/>
    //   return <InvalidPass/>
    return(props.isValid)? <ValidPass/> : <InvalidPass/>
  }

export default Passowrd