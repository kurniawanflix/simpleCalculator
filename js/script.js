// Fungsi insert angka
function insert(number){
	document.form.textarea.value = document.form.textarea.value + number
}

// Fungsi Hitung
function equal(){
	var result = document.form.textarea.value
	document.form.textarea.value = eval(result)
}

// Fungsi Clear
function clearNum(){
	document.form.textarea.value = ''
}

// Fungsi Delete
function del(){
	var result = document.form.textarea.value;
	document.form.textarea.value = result.substring(0,result.length-1)
}