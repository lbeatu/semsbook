import React, { useState, Fragment } from "react";
import Modal from "./Modal";
const gridItem = () => {
  const imgUrls = [
    "https://wallpaperplay.com/walls/full/d/e/e/20898.jpg",
    "https://source.unsplash.com/lVmR1YaBGG4/800x600",
    "https://source.unsplash.com/5KvPQc1Uklk/800x600",
    "https://www.pasajhome.com/image/cache/catalog/duvar/duvar%20%C3%B6rt%C3%BCs%C3%BC%20-%20minimal%20floral%203-550x550.jpg",
    "https://theminimaldaily.com/wp-content/uploads/2018/11/Minimalist-Wall-Clock-2.jpg",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAllBMVEUDGiIDEhdlye2/6fcEGyMXKzIRJS0LICkIHiYCGiIVKTEHHCUGHSUQJC0AGiEKHyddxuwZKi9nz/S15fYJISiiydc7W2c3ZnkzXW0hOEIVHyIYJitbeYTB8f9gvN5DgpgnP0hyze82SlGI1fEPKTSKzeXG7Pme3PM7VF54pLKt09+76vuw4/ZUcHpriJOUt8M8c4ddttiitGfOAAADLElEQVR4nO3Z7VLTQBhA4dpkk7BJP6ECYpVSCX4g6P3fnClYiFJmPL+yzpxzBTvPbN5ud0cj+9feDL2A/ymxQGKBxAKJBRILJBZILJBYILFAYoHEAokFEgskFkgskFggsUBigcQCiQUSCyQWSCyQWCCxQGKBxAKJBRILJBZILJBYILFAYoHEAokFEgskFkgskFggsUBigcQCiQUSCyQWSCyQWCCxQGKBxAKJBRILJBZILJBYILFAYoHEAokFEgskFkgskFggsUBigcQCiQUSC5QiVt7UTdPk06HX8aLksPJmVhZdk0lZ50Mv5q9Sw6rLIoawWCxCCEVZD72cP0sLK68mMRTT8Pb07PzdRYjFLD8aek290sKqihCm71frZdeHj3HRba6hl9QvKaxqEuLlap1txruWH84uQlENvaheKWHVZQxXWdtu5+PHlqedVjP0sp5LCav7CD9df2tv9lZdn0Ms0/lNTAgrL8Psy3K+vdlLbcY3X6uUtlZCWHURzr/1dtX8ts3W32NMZ2olhFXF4m497mNlWXbfxHR+EBPCKmNz394+b63NcYf19SSkM7RSwgrTVZbdbvZW2UMxTMR62SPW097atmK93u4z7LC24z6Wn+HhHgZ8drwfWvOb1gH/at3R4bKbWU8Tfr7dHR0Kjw6H6g6l0/s2ez47bNrdV+ih9GC7O4fjdtPDWr+N/t05XF2G+Pn5O+yG1vtZShsrKazd1Cqurpf7O4fj75VXNK836z7E8sfP5ePlXyieLv+OkrgwTQtrtLtWXrw7P/txetm/Vs6rOoX75cSw9g8WF388WOSTGIth1/VQali/n8Imk/5TWDNaraYJDPrksEYHHlnrk7u7k2b4R9cUsV50VFbVzJn1r/lr+N8lFkgskFggsUBigcQCiQUSCyQWSCyQWCCxQGKBxAKJBRILJBZILJBYILFAYoHEAokFEgskFkgskFggsUBigcQCiQUSCyQWSCyQWCCxQGKBxAKJBRILJBZILJBYILFAYoHEAokFEgskFkgskFggsUBigcQCiQUSCyQWSCyQWCCxQGKBxAKJBRILJBZILJBYILFAb34B4s0cXaJJdvgAAAAASUVORK5CYII=",
    "https://source.unsplash.com/MoI_cHNcSK8/800x600",
    "https://source.unsplash.com/M0WbGFRTXqU/800x600",
    "https://source.unsplash.com/s48nn4NtlZ4/800x600",
    "https://source.unsplash.com/E4944K_4SvI/800x600",
    "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
    "https://source.unsplash.com/iPum7Ket2jo/800x600"
  ];

  const [show, setShow] = useState(false);
  const [img, setImg] = useState(0);

  const hideModal = () => {
    setShow(!show);
    console.log(img);
  };
  const showImage = img => {
    setShow(!show);
    setImg(img);
  };

  return (
    <div className="bottom-container">
      <div className="image-container">
        {imgUrls.map((img, i) => (
          <div className="cardgrid" onClick={() => showImage(img)}>
            <img src={img} key={i} className="cardgrid__img"></img>
            <div class="cardgrid__info">
              <span class="cardgrid__category"> Travel</span>
              <h3 class="cardgrid__title">Crisp Matzo brei</h3>
              <span class="cardgrid__by">
                by{" "}
                <a href="#" class="cardgrid__author" title="author">
                  Semanur Küçük
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} handleClose={hideModal}>
        <div class="card">
          <div class="imgBx">
            <i class="far fa-calendar-alt">
              <span>18.10.19</span>
            </i>

            <img src={img} alt="images"></img>
          </div>
          <div class="details">
            <h2>
              Semanur Küçük<span>Created by</span>
            </h2>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default gridItem;
