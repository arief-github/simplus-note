const titleValidation = (value) => {
    // checking if not null
    if (value.length === 0 || value === '') {
        return 'Judul Tidak boleh kosong!';
    }

    // checking for weird characters
    const pattern = /^[A-Za-z0-9 -]*$/;

    if (pattern.test(value) === false) {
        return ' Judul hanya boleh huruf dan angka ';
    }

    return null;
}

const bodyTextValidation = (value) => {
    // checking if not null
    if (value.length === 0 || value === '') {
        return ' Isi Catatan tidak boleh kosong! ';
    }

    return null;
};

export { titleValidation, bodyTextValidation };