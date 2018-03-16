def transpose(arr)
  new_arr = []
  i = 0
  while i < arr.length
    new_row = []
    j = 0
    while j < arr.length
      new_row << arr[j][i]
      j += 1
    end
    i += 1
    new_arr << new_row
  end

  new_arr
end

def bubble_sort(arr, &prc)
  prc ||= Proc.new { |x, y| x <=> y }

  sorting = true
  while sorting
    sorting = false
    i = 0
    (i...arr.length - 1).each do |idx1|
      j = i + 1
      (j..arr.length).each do |idx2|
        if prc.call(arr[idx1], arr[idx2]) == 1
          arr[idx1], arr[idx2] = arr[idx2], arr[idx1]
          sorting = true
        end
      end
    end
  end

  arr
end

def substrings(str)
  subs = []

  i = 0
  while i < str.length - 1
    j = i + 1
    while j < str.length

      subs << str.slice(i, j)
    end
  end

  subs
end

def range(start, stop)
  return [start] if start == stop
  arr = [start]
  arr.concat(range(start + 1, stop))
  arr
end

def rec_sum(arr)
  return 0 if arr.empty?
  arr[0] += rec_sum(arr[1..-1])
end

def exponent(base, n)
  return 1 if n = 0
  base * exponent(base, n-1)
end

def exponent2(base, n)
  return 1 if n = 0
  return base if n = 1

  if n.odd?
    base * (exponent2(base, ((n-1)/2)) ** 2)
  else
    exponent2(base, (n/2))
  end

end

# def fib_num(n)
#   return 1 if n == 1
#   return 1 if n == 2
#   result = [1]
#   result.concat([fib_num(n-1) + result[0]])
# end

def fib_sum(n)
  return [1] if n == 1
  return [1, 1] if n == 2


  num = fib_sum(n-1).last + fib_sum(n-2).last

  fib_sum(n-1) << num
end

# def fib_num(n)
#   return [] if n == 0
#   return [1] if n == 1
#
#   fib_num(n-1) << fib(n)
# end
#
# def fib(n)
#   return 1 if n == 1
#   return 1 if n == 2
#   fib(n-1) + fib(n-2)
# end






















#
