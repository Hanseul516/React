import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, sethexValue, isDarkText, setIsDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input
                autoFocus
                type="text"
                placeholder="색상명을 입력하세요."
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                    sethexValue(colorNames(e.target.value))
                }} />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)} >
                텍스트 색 전환</button>
        </form>
    )
}

export default Input