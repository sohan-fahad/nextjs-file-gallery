export const dataURLtoFile = (dataurl: string) => {
    let filename: any = dataurl.split(/[\\\/]/);
    filename = filename[filename.length - 1]
    return new File([new Blob([dataurl])], filename);
};


