export const toDateFormat = (date) =>
{
    const _d = new Date(date);
    let [_dd, _mm, _yyyy] = [_d.getDate(), _d.getMonth(), _d.getFullYear()];

    if(_dd < 10)
    {
        _dd = '0'+_dd;
    }
    if(_mm < 10)
    {
        _mm = '0'+_mm;
    }

    return `${_dd}/${_mm}/${_yyyy}`

}