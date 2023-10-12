const useNavlist = (text: any): any => {
  const navList = [
    {
      name: text.headers[1],
      href: "/company",
      children: [
        {
          name: text.headers["1-1"],
          href: "/company/info",
        },
        {
          name: text.headers["1-2"],
          href: "/company/greeting",
        },
        {
          name: text.headers["1-3"],
          href: "/company/history",
        },
        {
          name: text.headers["1-4"],
          href: "/company/ci",
        },
        {
          name: text.headers["1-5"],
          href: "/company/location",
        },
      ],
    },
    {
      name: text.headers[2],
      href: "/product",
      children: [
        {
          name: text.headers["2-1"],
          href: "/product/ict",
        },
        {
          name: text.headers["2-2"],
          href: "/product/es",
        },
        {
          name: text.headers["2-3"],
          href: "/product/ss",
        },
      ],
    },
    {
      name: text.headers[3],
      href: "/business",
      children: [
        {
          name: text.headers["3-1"],
          href: "/business/ict",
        },
        {
          name: text.headers["3-2"],
          href: "/business/es",
        },
        {
          name: text.headers["3-3"],
          href: "/business/ss",
        },
      ],
    },
    {
      name: text.headers[4],
      href: "/education",
      children: [
        {
          name: text.headers["4-1"],
          href: "/education/summary",
        },
        {
          name: text.headers["4-2"],
          href: "/education/apply",
        },
      ],
    },
    {
      name: text.headers[5],
      href: "/community",
      children: [
        {
          name: text.headers["5-1"],
          href: "/community/contactus",
        },
        {
          name: text.headers["5-2"],
          href: "/community/notice",
        },
        {
          name: text.headers["5-3"],
          href: "/community/news",
        },
        {
          name: text.headers["5-4"],
          href: "/community/video",
        },
      ],
    },
  ]
  return navList
}

export default useNavlist
