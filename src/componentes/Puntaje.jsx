const Puntaje = ({puntaje}) => {
    let colorLetra;

    if (puntaje <= 49){
        colorLetra = 'red'
    } else if (50 <= puntaje && puntaje <= 59){
        colorLetra = 'yellow'
    } else{
        colorLetra = 'green'
    }

    const style={
        color: colorLetra,
        padding: '.4rem',
        margin: 'auto 0 auto 4rem'
    };

    return <span style={style}>{puntaje}</span>
}

export default Puntaje;