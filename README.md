# Click SVG

**Scalable Vector Graphics (SVG)** is an XML-based vector image format for graphics. It’s a graphics format, like JPEG or PDF, and the whole idea behind them is that they aren’t limited to a certain resolution; because instead of being made from pixels, SVGs are made from vector shapes.

It is supported by all the major modern web browsers, can be compressed and is scalable and device agnostic. Just imagine it as an abstract coordinate system that can be scaled up and down to any size. The important part is that it looks great on any device size or resolution that supports it.

This repository contains all the SVGs used at Click Therapeutics — both in SVG file format and React javascript components.

- [Guidelines](#)
- [Frequesntly asked questions](#)
- [View full table of SVGs](#)

## Getting Started 🏁

Click SVGs are organized into the following variants:

- **🧩 Icons**
- **🎖 Badges**
- **🖼 Illustrations**

Each category of SVG is intended to be used in a different contexts and ways. Regardless, the category is only meant to imply use, feel free use and adapt the SVGs as needed.

Depending on your needs and role, follow the guidelines below to create new or edit existing Click SVGs:

- **[SVG for Designers](/#for-designers)**

- **[SVG for Engineers](/#for-designers)**

## **Table of SVGs**

| Name            | Variant        | .svg | .js |
| --------------- | -------------- | ---- | --- |
| admin           | 🧩 Icon        |      |     |
| admin           | 🧩 Icon        |      |     |
| arrow_left      | 🧩 Icon        |      |     |
| arrow_right     | 🧩 Icon        |      |     |
| bookmark_hollow | 🧩 Icon        |      |     |
| bookmark        | 🧩 Icon        |      |     |
| calendar        | 🧩 Icon        |      |     |
| camera          | 🧩 Icon        |      |     |
| check           | 🧩 Icon        |      |     |
| chevron_down    | 🧩 Icon        |      |     |
| chevron_left    | 🧩 Icon        |      |     |
| chevron_right   | 🧩 Icon        |      |     |
| chevron_up      | 🧩 Icon        |      |     |
| circle_dot      | 🧩 Icon        |      |     |
| circle_hollow   | 🧩 Icon        |      |     |
| circle          | 🧩 Icon        |      |     |
| close           | 🧩 Icon        |      |     |
| eye_open        | 🧩 Icon        |      |     |
| eye_close       | 🧩 Icon        |      |     |
| graph_line      | 🧩 Icon        |      |     |
| home            | 🧩 Icon        |      |     |
| info            | 🧩 Icon        |      |     |
| options         | 🧩 Icon        |      |     |
| phone           | 🧩 Icon        |      |     |
| square_hollow   | 🧩 Icon        |      |     |
| square          | 🧩 Icon        |      |     |
| star_hollow     | 🧩 Icon        |      |     |
| star            | 🧩 Icon        |      |     |
| supporter       | 🧩 Icon        |      |     |
| thumbs_down     | 🧩 Icon        |      |     |
| thumbs_up       | 🧩 Icon        |      |     |
| timer           | 🧩 Icon        |      |     |
| tools           | 🧩 Icon        |      |     |
| user            | 🧩 Icon        |      |     |
| alarm_clock     | 🧩 Icon        |      |     |
| apple           | 🧩 Icon        |      |     |
| band_aid        | 🧩 Icon        |      |     |
| bar             | 🧩 Icon        |      |     |
| bottle          | 🧩 Icon        |      |     |
| breathing       | 🧩 Icon        |      |     |
| cardio          | 🧩 Icon        |      |     |
| carrot          | 🧩 Icon        |      |     |
| cigarette       | 🧩 Icon        |      |     |
| coach           | 🧩 Icon        |      |     |
| coffee          | 🧩 Icon        |      |     |
| community       | 🧩 Icon        |      |     |
| dosage          | 🧩 Icon        |      |     |
| drinking        | 🧩 Icon        |      |     |
| driving         | 🧩 Icon        |      |     |
| exercise        | 🧩 Icon        |      |     |
| family          | 🧩 Icon        |      |     |
| journal         | 🧩 Icon        |      |     |
| kit             | 🧩 Icon        |      |     |
| love            | 🧩 Icon        |      |     |
| lungs           | 🧩 Icon        |      |     |
| meal            | 🧩 Icon        |      |     |
| medication_list | 🧩 Icon        |      |     |
| medication      | 🧩 Icon        |      |     |
| mindful         | 🧩 Icon        |      |     |
| mission         | 🧩 Icon        |      |     |
| nightlife       | 🧩 Icon        |      |     |
| nrt_gum         | 🧩 Icon        |      |     |
| nrt_lozenge     | 🧩 Icon        |      |     |
| nrt_patch       | 🧩 Icon        |      |     |
| outdoors        | 🧩 Icon        |      |     |
| quit_aids       | 🧩 Icon        |      |     |
| ribbon          | 🧩 Icon        |      |     |
| snack           | 🧩 Icon        |      |     |
| target          | 🧩 Icon        |      |     |
| thinking        | 🧩 Icon        |      |     |
| tooth           | 🧩 Icon        |      |     |
| trophy          | 🧩 Icon        |      |     |
| vape            | 🧩 Icon        |      |     |
| walk            | 🧩 Icon        |      |     |
| water           | 🧩 Icon        |      |     |
|                 | 🎖 Badge        |      |     |
|                 | 🖼 Illustration |      |     |

# 📚 SVG Guidelines:

## SVG for Designers 🧑‍🎨

**Resources & Guides:**

1. [Mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG)
2. [CSS Tricks | "Using SVG"](https://css-tricks.com/using-svg/)

### Creating Click SVGs

---

#### 🧩 Icons

**Aspect ratio:** 1.0

**Art-board Dimensions:** `width="24" height="24"`

**SVG Viewbox:** `viewBox="0 0 24 24"`

All Icons are singular, compound paths – designed flat and with a single `fill` color.

---

#### 🖼 Illustrations

**Aspect ratio:** 1.5

**Art-board Dimensions:** `width="327" height="218"`

**SVG Viewbox:** `viewBox="0 0 327 218"`

**Layers:**

**⬛︎ Background layer**

Every Illustration should contain a background with 08r corners.

`<svg/>`

**🦠 Blob layer**

The first layer of every Illustration is a Blob symbol. There are 8 blob variants to select from – choose the best blob for the illustration you are creating. Whichever blob style you select, it should be horizontally and vertically centered.

`<svg/>`

---

#### 🎖 Badges

**Aspect ratio:** 1.0

**Art-board Dimensions:** `width="96" height="96"`

**SVG Viewbox:** `viewBox="0 0 96 96"`

**Layers:**

Every Badge starts as a circle background.

**⚫️ Circle**

`<svg/>`

**States:**

### Exporting SVG

When done designing an SVG and everything is ready to go, you have to export our graphic to SVG file type.

A lot of SVG files (particularly those generated by SVG editors like Sketch or Adobe) export without being cleaned up and can contain a ton of junk and metadata that bloats the file size and slows down rendering. Generally the best way to combat this is to first run SVG files through a linter, or clean simple ones up by hand.

## SVG for Engineers 👷

**Resources & Guides**

1. [Mozilla Developer Guideline](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/SVG_Guidelines)
2. [SVGR](https://react-svgr.com/)

### HTML

#### Websites

#### Emails

### React

## **🤔 Frequently Asked Questions**

> #### **Why SVG? — why not just use PNG and JPEG instead?**
>
> _SVG matters because it allows our applications to avoid heavy graphic files and resolution issues. Regardless of the device, an SVG will remain crisp and clean, with a shorter loading time than a PNG or JPEG._

> #### **When do I use a regular Bitmap (PNG/JPEG) vs a vector (SVG)?**
>
> _Of course, as usual, it depends. However, the best part about creating SVG is that it can always be used to generate PNG and JPG assets. Here are a few questions to ask:_
>
> > ##### _**Was this originally made with a camera? 📷**_
> >
> > - _If a camera, or for instance a scanner, made the original file, keep it that way._
> > - _Photographs or photorealistic pictures are best in compressed forms of PNG, JPEG depending on the quality required._
> >
> > ##### _**How many colors do I need? 🎨**_
> >
> > - _Less than (≤) 256 use SVG_
> > - _More than (>) 256 use PNG, JPG_
> >
> > ##### _**Do I need transparency? ✨**_
> >
> > - _Yes:_
> >   - _Use SVG_
> >   - _If for intended for emails or documents use PNG_
> > - _No:_
> >   - _Use SVG_
> >
> > ##### _**Do I need the whole image to be sharp? 💎**_
> >
> > - _Yes:_
> >   - _Use SVG_
> > - _No:_
> >   - _Use PNG first, followed by JPEG depending on desired optimization._
> >
> > ##### _**Are multiple variants needed? (i.e., themes, transitions, states, modes, DPIs, etc) 🎭**_
> >
> > - _If less than (≤) 2 use PNG, JPG_
> > - _More than (>) 256 use SVG_
> >
> > ##### _**How is my audience intended to view this? 👀**_
> >
> > - _When viewing on a website or app use SVG_
> >   - _If intended for email use PNG, JPG_
> > - _If viewing in a file (pdf, doc, google etc.) use PNG, JPG_
