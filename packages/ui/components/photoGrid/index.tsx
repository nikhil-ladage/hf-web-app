export const PhotoGrid = () => {
    const treatmentOptions = [
        {
            text: "Face",
            img: "https://images.contentstack.io/v3/assets/blt504d36ed00347088/blt27ad5260befae603/637f181ba32209106e8b6008/client_homepage_face.jpg",
            path: "https://www.hydrafacial.com/treatment-type-detail/face/",
        },
        {
            text: "Body",
            img: "https://images.contentstack.io/v3/assets/blt504d36ed00347088/blte583695d78da6f78/637f1826f213ef108ebd857c/providertreatment_body.jpg",
            path: "https://www.hydrafacial.com/treatment-type-detail/body/",
        },
        {
            text: "Lip & Eye",
            img: "https://images.contentstack.io/v3/assets/blt504d36ed00347088/blt006ff639cf56d948/637f181c5834861044c21b5a/providertreatment_lipandeye.jpg",
            path: "https://www.hydrafacial.com/treatment-type-detail/lipAndEye/",
        },
        {
            text: "Scalp",
            img: "https://images.contentstack.io/v3/assets/blt504d36ed00347088/blt8c0b4b99d6c87481/637f181f7bafc010a02f99e7/providertreatment_scalp.jpg",
            path: "https://www.hydrafacial.com/treatment-type-detail/scalp/",
        },
    ];
    return (
        <div className="py-[40px] small:py-24">
            <div className="flex flex-row items-center justify-center  ">
                <h2 className="text-[35px] text-center leading-10">
                    Facials Are Just the Beginning
                </h2>
            </div>
            <div className="flex flex-row items-center justify-center my-4 ">
                <p className="md:text-[24px] text-[20px] leading-7 md:leading-8  text-center font-light pt-2.5 px-5 pb-0 md:pb-12 max-w-3xl">
                    Experience the Hydrafacial glow from scalp to toe with our
                    variety of skin-transforming treatments.
                </p>
            </div>
            <div className="grid  md:grid-cols-4  grid-cols-2 gap-4 ">
                {treatmentOptions &&
                    treatmentOptions.map((item, index) => {
                        return (
                            <div key={index} className="relative cursor-pointer">
                                <div>
                                    <img src={item.img}></img>
                                </div>
                                <span className="absolute bottom-0 w-full text-[30px]  text-center bg-[#f5f5f5] md:py-6 opacity-3 uppercase opacity-75 leading-10">
                                    {item.text}
                                </span>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};