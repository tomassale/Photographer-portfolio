import { useEffect, useRef } from "react"

const MouseFollower = () => {
  const mouseFollowerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      mouseFollowerRef.current.style.left = `${x}px`
      mouseFollowerRef.current.style.top = `${y}px`
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div className="mouseFollower" ref={mouseFollowerRef}></div>
}

export default MouseFollower