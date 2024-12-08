"use client";
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';


// Define the type for each item
type Item = {
    id: number;
    img: string;
    para: string;
    para2: string;
    para3: string;
    anker: string;
    paragraph: string
};

const Page: FC = () => {
    const { id } = useParams();  // Use useParams to get the dynamic id


    const item: Item[] = [
        {
            id: 1,
            img: "/shoe-images/jordan-1.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its 'inside out'-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."

        },
        {
            id: 2,
            img: "/shoe-images/shoes-3.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph: "Footwear plays a significant role in enhancing not just our overall appearance but also our comfort and functionality. From casual sneakers to formal leather shoes, the variety of footwear available today caters to different occasions and preferences. Footwear trends have evolved over the years, blending traditional designs with modern styles. Whether it’s a pair of running shoes for a workout or sandals for a casual outing, footwear adapts to every scenario. The right pair can make or break an outfit, emphasizing the importance of choosing wisely. Moreover, specialized footwear like orthopedic shoes supports those with specific needs. The versatility of footwear ensures there's something for everyone."

        },
        {
            id: 3,
            img: "/shoe-images/shoes-4.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph: "Wearing comfortable footwear is essential for maintaining foot health and overall well-being. Poorly designed or ill-fitting shoes can lead to foot pain, blisters, or even long-term health issues such as back pain. Footwear brands today are investing in advanced technologies like memory foam insoles and breathable materials to provide maximum comfort. For athletes, shoes with proper cushioning and support can enhance performance while reducing the risk of injury. Additionally, comfortable shoes contribute to improved posture and confidence. After all, a good day often starts with happy feet."

        },
        {
            id: 4,
            img: "/shoe-images/shoes-5.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph: "Footwear has undergone tremendous evolution, from primitive sandals made of leaves and animal hides to high-tech sneakers with smart features. In ancient times, footwear was primarily a necessity to protect feet from harsh terrain. Over the years, it has transformed into a symbol of fashion, status, and culture. Today, there are endless options, including eco-friendly and vegan footwear, catering to modern sustainability demands. The evolution of footwear reflects not just advancements in design but also the changing lifestyle and preferences of society."

        },
        {
            id: 5,
            img: "/shoe-images/shoes-6.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "With growing environmental concerns, sustainable footwear has gained popularity in recent years. Brands are now using eco-friendly materials such as recycled plastic, bamboo, and organic cotton to produce shoes. These sustainable options aim to reduce the carbon footprint associated with footwear production. Moreover, many companies promote ethical labor practices and give back to communities, aligning with the values of conscious consumers. Investing in sustainable footwear allows individuals to make a style statement while contributing to a healthier planet."
          
        },
        {
            id: 7,
            img: "/shoe-images/night.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Technology has revolutionized the footwear industry, introducing innovative features that enhance both performance and comfort. Smart shoes equipped with sensors can track steps, measure calories burned, and even adjust fit automatically. Advanced materials like lightweight foam and carbon fiber have made shoes more durable and efficient. Virtual try-on technologies now allow customers to see how a pair of shoes will look on their feet before purchasing. These advancements make footwear more user-friendly and accessible than ever."
          
        },
        {
            id: 8,
            img: "/shoe-images/shoes-7.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Footwear holds cultural significance across the globe, representing traditions, rituals, and history. For example, Japanese wooden geta sandals and Indian jutti shoes are iconic pieces of their respective cultures. Traditional footwear often tells a story about the region’s lifestyle, materials available, and craftsmanship. Even modern shoes can reflect cultural influences, such as streetwear sneakers inspired by hip-hop culture. This connection between footwear and culture highlights its importance beyond practicality."
          
        },
        {
            id: 9,
            img: "/shoe-images/t-shirt.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Athletic footwear is designed with precision to cater to the specific needs of athletes and sports enthusiasts. Running shoes provide cushioning for impact absorption, while basketball shoes focus on ankle support and grip. The development of specialized footwear for different sports has significantly improved athletic performance and reduced the risk of injuries. Many brands now collaborate with professional athletes to create shoes tailored for peak performance. Athletic footwear combines style and functionality, ensuring athletes perform at their best."
          
        },
        {
            id: 10,
            img: "/shoe-images/shoes-8.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Luxury footwear brands like Christian Louboutin, Jimmy Choo, and Gucci have redefined the perception of shoes. These brands focus on exquisite craftsmanship, premium materials, and unique designs that exude elegance and sophistication. Owning a pair of luxury shoes is often considered a status symbol. While they may come with hefty price tags, luxury footwear is an investment in quality, comfort, and timeless style."
          
        },
        {
            id: 11,
            img: "/shoe-images/shoes-9.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Casual footwear such as sneakers, loafers, and flip-flops has become a staple in everyone’s wardrobe. These shoes are perfect for daily activities, offering comfort and ease without compromising style. The popularity of casual footwear has soared, with many brands introducing versatile designs suitable for work, travel, and leisure. Casual shoes are not just practical but also allow individuals to express their laid-back personalities."
          
        },
        {
            id: 12,
            img: "/shoe-images/shoes-10.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Footwear adapts to the changing seasons, providing functionality and comfort throughout the year. Winter boots with insulation keep feet warm, while breathable sandals are ideal for summer. Rainy seasons call for waterproof shoes to keep feet dry and comfortable. Seasonal footwear not only ensures protection but also enhances style with designs that align with the season’s vibe."
          
        },
        {
            id: 13,
            img: "/shoe-images/black.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Sneakers have become one of the most popular types of footwear, loved by people of all ages. Once associated only with sports, sneakers are now a fashion staple for casual and even semi-formal occasions. The rise of sneaker culture has led to the launch of limited-edition collections, making them highly sought after by collectors. Sneakers are versatile, comfortable, and effortlessly stylish, making them a go-to choice for many."
          
        },
        {
            id: 14,
            img: "/shoe-images/red-shoes.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Footwear for special occasions often features intricate designs, luxurious materials, and eye-catching details. Wedding shoes, for example, are designed to complement bridal outfits and add a touch of glamour. Similarly, evening shoes for parties or formal events come in a range of elegant styles, such as stilettos, loafers, and patent leather shoes. Special occasion footwear ensures that individuals look their best while celebrating life’s important moments."
          
        },
        {
            id: 15,
            img: "/shoe-images/orange.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "Wearing the right footwear is crucial for maintaining good foot health. Ill-fitting shoes can cause problems such as bunions, corns, and joint pain. Orthopedic shoes are specifically designed to address these issues, providing support and alignment for the feet. Even for those without medical conditions, wearing supportive and well-cushioned footwear can prevent long-term damage. Footwear is not just about style; it’s a tool for promoting overall well-being."
          
        },
        {
            id: 16,
            img: "/shoe-images/rainbow.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
            paragraph : "The future of footwear is promising, with innovations focusing on sustainability, technology, and personalization. 3D printing is revolutionizing the manufacturing process, allowing for custom-fit shoes tailored to individual needs. Sustainable practices will continue to dominate, with brands pushing boundaries to create zero-waste designs. Additionally, the integration of wearable technology in footwear will open new possibilities, making shoes smarter and more interactive than ever before."
          
        },


        // { id: 2, img: '/images/shoe2.jpg', para: 'Adidas Ultraboost', anker: 'Comfortable all day', stars: '4.7', price: '$120' },
    ];

    // Find the product based on the dynamic ID
    const product = item.find((product) => product.id.toString() === id);


    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div>
            <Navbar />
            <Header />
            <div>

                <div key={product.id} className="flex justify-center items-start py-8 px-4 sm:px-8 md:px-16  lg:px-36">
                    <div className="flex flex-col lg:flex-row gap-11 justify-start items-start max-w-screen-xl w-full">
                        <div className="flex justify-center items-start w-full lg:w-1/2 mb-6 lg:mb-0">
                            <Image src={product.img} alt={product.para} width={653} height={653} />
                        </div>
                        <div className="w-full lg:w-1/2 text-left px-4">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{product.para}</h1>
                            <p className="text-sm sm:text-base mb-6">{product.paragraph}</p>
                            <p className="text-[20px] md:text-[36px] mb-6">{product.anker}</p>
                            <div className="bg-black h-[40px] w-[148px] text-center rounded-3xl float-start items-center">
                                <button className="bg-black text-white rounded-3xl mt-2 h-[20px] w-[120px] text-sm md:text-basetransition duration-300">
                                    <Link href="/mens">
                                    
                                    Add To Cart</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default Page;
