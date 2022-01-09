function Lista({ isShown, uczniowie }) {
    return (

        <ul style={{ display: isShown ? 'initial' : 'none' }} >
            {
                uczniowie.map(uczen => (
                    <li key={uczen}>
                        {uczen}
                    </li>
                ))
            }
        </ ul>
    )
}

export default Lista;